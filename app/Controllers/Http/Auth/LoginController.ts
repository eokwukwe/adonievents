import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class LoginController {
  public async create({ inertia }: HttpContextContract) {
    return inertia.render('Auth/Login')
  }

  /**
   * Log user in
   */
  public async store({ request, response, auth, session }: HttpContextContract) {
    const user = await User.findBy('email', request.input('email'))

    if (!user || !(await Hash.verify(user.password, request.input('password')))) {
      session.flash('error', 'Invalid credentials')
      return response.redirect().back()
    }

    if (!(await user.emailIsVerified())) {
      session.flash(
        'error',
        "You've not verified your email. Use the link that was sent to mail or request another one."
      )
      return response.redirect().back()
    }

    await auth.use('web').login(user)

    response.redirect().toRoute('UsersController.index', { id: user.id })
  }

  /**
   * Destroy user session (aka logout)
   */
  public async destroy({ auth, response }: HttpContextContract) {
    await auth.logout()
    response.redirect('/')
  }
}
