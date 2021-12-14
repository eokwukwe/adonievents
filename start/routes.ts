/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ inertia }) => {
  return inertia.render('Welcome')
})
  .as('welcome')
  .middleware('guest')

Route.group(() => {
  Route.get('users/:id', 'UsersController.index')
    .as('user.index')
    .namespace('App/Controllers/Http/Users')

  Route.post('logout', 'LoginController.destroy')
    .as('logout')
    .namespace('App/Controllers/Http/Auth')
}).middleware('auth')

Route.group(() => {
  Route.get('register', 'RegisterController.create').as('register.create')
  Route.post('register', 'RegisterController.store').as('register.store')

  Route.get('login', 'LoginController.create').as('login.create')
  Route.post('login', 'LoginController.store').as('login.store')

  Route.get('verify-email/:email', 'EmailVerificationController.verify').as('verifyEmail')

  Route.get('verification-link', 'EmailVerificationController.show').as(
    'verification.show'
  )

  Route.post('verification-link', 'EmailVerificationController.send')
})
  .middleware('guest')
  .namespace('App/Controllers/Http/Auth')
