import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index ({}: HttpContextContract) {
    return { name: 'MarkWatt.' };
  }

  public async store ({ request }: HttpContextContract) {
    const payload = request.only(['name']); //recommend for validate request from body

    return payload;
  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
