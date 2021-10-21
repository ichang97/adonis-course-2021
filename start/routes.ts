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

// Route.route('/api/users', ['GET', 'POST'], (context) => {
//   return context;
// });

Route.get('/api/users', 'UsersController.index');

Route.post('/api/users', 'UsersController.store');

Route.get('/api/users/:name?', ({ params }) => {
  return { params, name: 'My name is ' + params.name};
});

