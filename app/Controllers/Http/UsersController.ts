import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

export default class UsersController {
  public async index ({ response }: HttpContextContract) {
    //return response.status(401).send({name: 'Mark Fuck U.'});

    // return response.status(200).send({
    //   status: 'success',
    //   message: '',
    //   data: {
    //     name: 'Mark eiei'
    //   }
    // })

    // const users = await Database.from('users').innerJoin('user_addresses', 'users.id', '=', 'user_addresses.user_id').toQuery();

    const users = await Database.from('users');

    // .toSql() -> view sql statement without bindings
    // .toQuery() -> view sql statement included bindings

    return users;


    // return response.status(500).send({
    //   status: 'error',
    //   message: 'error. eiei',
    //   data: null
    // })
  }

  public async store ({ request }: HttpContextContract) {
    const payload = request.only(['name', 'email', 'password', 'age', 'status']); //recommend for validate request from body
    // const user = await Database.table('users').insert(payload);

    const user = await User.create(payload);

    // const users = await Database.from('users')
    //                 .where(builder => {
    //                   builder.where('id', '<>', 1).orWhere('status', 'inactive');
    //                 })
    //                 .where(builder => {
    //                   builder.where('age', '>', 19).orWhere('status', 'active')
    //                 })
    
    return user;
  }

  public async show ({ params, response }: HttpContextContract) {
    const user = await User.find(params.id);
    await user?.load('UserAddresses');

    return response.status(200).send(user);
  }

  public async update ({ params, request, response }: HttpContextContract) {
    const payload = request.only(['name', 'email', 'password', 'age']);

    const { id: userId } = params;

    // const result = await Database.from('users').where('id', userId).update(payload);
    const user = await User.find(userId);
    await user?.merge(payload).save();



    // return {
    //   result,
    //   payload,
    //   userId
    // }

    return response.status(200).send(user);
  }

  public async destroy ({ params }: HttpContextContract) {
    const {id: userId} = params;

    const result = await Database.from('users').where('id', userId).delete();

    return {
      params,
      result
    }
  }
}
