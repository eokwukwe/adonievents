import { ConfigOptions } from 'cloudinary'
import Env from '@ioc:Adonis/Core/Env'

const cloudinaryConfig: ConfigOptions = {
  cloud_name: Env.get('CLOUDINARY_CLOUD_NAME'),
  api_key: Env.get('CLOUDINARY_API_KEY'),
  api_secret: Env.get('CLOUDINARY_API_SECRET'),
  private_cdn: Env.get('CLOUDINARY_PRIVATE_CDN'),
  secure_distribution: Env.get('CLOUDINARY_SECURE_DISTRIBUTION'),
  force_version: Env.get('CLOUDINARY_FORCE_VERSION'),
  ssl_detected: Env.get('CLOUDINARY_SSL_DETECTED'),
  secure: Env.get('CLOUDINARY_SECURE'),

  scaling: {
    transformation: {
      format: 'png',
    },
    width: 150,
    height: 150,
    crop: 'fit',
  },
}

export default cloudinaryConfig
