/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia'

Inertia.share({
  errors: (ctx) => {
    return ctx.session.flashMessages.get('errors')
  },
  auth: (ctx) => {
    return { user: ctx.auth.user?.serialize() }
  },
  flash: (ctx) => {
    return {
      error: ctx.session.flashMessages.get('error') ?? null,
      success: ctx.session.flashMessages.get('success') ?? null,
    }
  },
}).version(() => Inertia.manifestFile('public/assets/manifest.json'))
