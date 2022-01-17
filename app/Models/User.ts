import { DateTime } from 'luxon'
import Env from '@ioc:Adonis/Core/Env'
import Hash from '@ioc:Adonis/Core/Hash'
import Mail from '@ioc:Adonis/Addons/Mail'
import Route from '@ioc:Adonis/Core/Route'
import { beforeSave, column, computed } from '@ioc:Adonis/Lucid/Orm'
import BaseModel from './BaseModel'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public phone: string

  @column()
  public bio: string

  @column()
  public profileImg: string

  @column({ serializeAs: null })
  public rememberMeToken?: string

  @column.dateTime({ serializeAs: null })
  public emailVerifiedAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  /**
   * Hash password at the time of saving the user to the database
   */
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @computed()
  public get avatar() {
    return `https://ui-avatars.com/api/?name=${this.firstName}+${this.lastName}&background=eee&color=3730a3`
  }

  public async sendVerificationEmail() {
    const url = `${Env.get('APP_URL')}${Route.makeSignedUrl('verifyEmail', {
      params: { email: this.email },
      expiresIn: '30m',
    })}`

    Mail.send((message) => {
      message
        .from('verify@adoinertia.com')
        .to(this.email)
        .subject('Please verify your email')
        .htmlView('emails/verification', { user: this, url })
    })
  }

  public async markEmailAsVerified() {
    this.emailVerifiedAt = DateTime.local()
    this.save()
  }

  public async emailIsVerified() {
    return !!this.emailVerifiedAt
  }
}
