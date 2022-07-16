import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'

export default class Register {
  public async index({}: HttpContextContract) {}

  public async create({ inertia }: HttpContextContract) {
    return inertia.render('Auth/Register')
  }

  public async store({ request, response, session }: HttpContextContract) {
    /**
     * Validate new user account creation form
     */
    const payload = await request.validate(CreateUserValidator)

    /**
     * Create a new user
     */
    const user = await User.create(payload)

    await user.sendVerificationEmail()

    session.flash(
      'success',
      'Registration successfull. Check your mail to verify your email'
    )

    response.redirect().back()
  }
}
