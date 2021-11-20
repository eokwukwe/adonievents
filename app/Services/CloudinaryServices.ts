import * as cloudinary from 'cloudinary'
import Config from '@ioc:Adonis/Core/Config'

class CloudinaryServices {
  private readonly cloudinaryInstance: typeof cloudinary.v2

  constructor() {
    const config: cloudinary.ConfigOptions = Config.get('cloudinary')

    cloudinary.v2.config({
      cloud_name: config.cloud_name,
      api_key: config.api_key,
      api_secret: config.api_secret,
    })

    this.cloudinaryInstance = cloudinary.v2
  }

  public cloudinary() {
    return this.cloudinaryInstance
  }
}

export default new CloudinaryServices()
