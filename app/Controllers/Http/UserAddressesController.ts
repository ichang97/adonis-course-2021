import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UserAddressesController {
  public async index ({}: HttpContextContract) {
    const users = await Database.from('user_addresses');

    return users;
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({ request }: HttpContextContract) {
    const payload = request.only(['address', 'sub_district', 'district', 'province', 'phone', 'user_id']);

    const result = await Database.table('user_addresses').insert(payload);

    return {
      payload,
      result
    };
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
