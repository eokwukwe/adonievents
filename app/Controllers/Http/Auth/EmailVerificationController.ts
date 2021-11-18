import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class EmailVerificationController {
  public async verify({ response, request, params, session }: HttpContextContract) {
    if (request.hasValidSignature()) {
      const user = await User.findByOrFail('email', params.email)

      if (await user.emailIsVerified()) {
        session.flash('success', 'THis email is already verified. Please log in.')

        return response.redirect().toRoute('LoginController.create')
      }

      await user.markEmailAsVerified()

      session.flash('success', 'Email verified. Please log in.')

      return response.redirect().toRoute('LoginController.create')
    } else {
      session.flash('error', 'Invalid verification link. Request for a new link.')

      return response.redirect().toRoute('EmailVerificationController.show')
    }
  }

  public async show({ inertia }: HttpContextContract) {
    return inertia.render('Auth/VerificationLink')
  }

  public async send({ request, response, session }: HttpContextContract) {
    const emailSchema = schema.create({
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.exists({ table: 'users', column: 'email' }),
      ]),
    })

    const payload = await request.validate({
      schema: emailSchema,
      messages: {
        'email.email': 'Invalid email format',
        'email.exists': 'Email does not exist in our record',
      },
    })

    const user = await User.findBy('email', payload.email)

    await user?.sendVerificationEmail()

    session.flash('success', 'The verification link has been send to the provided email.')

    response.redirect().back()
  }
}
