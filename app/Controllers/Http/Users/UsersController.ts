import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public async index({ inertia, params }: HttpContextContract) {
    const user = await User.findByOrFail('id', params.id)

    return inertia.render('Users/Index', { user })
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
