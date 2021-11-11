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
| import './routes/customer'
|
*/

//GET
//POST
//DELETE
//PATCH - use for update some attribute
//PUT - use for update all attribute
//OPTIONS

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

interface meeiei {
  name: string;
  age: number;
}

let meow: meeiei = {
  name: 'xxx',
  age: 30
};

Route.get('/xxx', async() => {
  return meow;
});


Route.group(() => {
  Route.resource('users', 'UsersController').apiOnly();
  Route.resource('users/:userId/address', 'UserAddressesController').apiOnly();
  Route.resource('users/:userId/companies', 'UserCompaniesController').apiOnly;

  // Route.get('/users', 'UsersController.index');
  // Route.post('/users', 'UsersController.store');


}).prefix('api');

Route.group(() => {
  Route.post('login', 'AuthController.login').middleware('logRequest')
  Route.get('me', 'AuthController.me').middleware(['auth', 'checkUser'])
  Route.post('logout', 'AuthController.logout').middleware(['auth', 'logRequest'])
}).prefix('auth');