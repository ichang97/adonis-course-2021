import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User';

export default class UserAddressesController {
  public async index ({}: HttpContextContract) {
    const users = await Database.from('user_addresses');

    return users;
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({ params, request, response }: HttpContextContract) {
    const payload = request.only(['address', 'sub_district', 'district', 'province', 'phone', 'user_id']);

    // const result = await Database.table('user_addresses').insert(payload);

    // return {
    //   payload,
    //   result
    // };

    const { userId } = params;

    try{
      const user = await User.findOrFail(userId);
      await user.related('UserAddresses').create(payload);

      await user?.load('UserAddresses');

      return response.status(201).send(user);

    }catch(e){
      return response.status(500).send({message: e.message})
    }
  }

  public async show ({ params }: HttpContextContract) {
    const {id: addressId} = params;

    const result = await Database.from('user_addresses').where('id', addressId)

    return {
      params,
      result
    }
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({ params, request }: HttpContextContract) {
    const payload = request.only(['address', 'sub_district', 'district'])

    const {id: addressId} = params

    const result = await Database.from('user_addresses').where('id', addressId).update(payload)

    return {
      payload,
      params,
      result
    }
  }

  public async destroy ({ params }: HttpContextContract) {
    const {id: addressId} = params

    const result = await Database.from('user_addresses').where('id', addressId).delete()

    return result;
  }
}
