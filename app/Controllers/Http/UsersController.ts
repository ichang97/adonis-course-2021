import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

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

    return response.status(500).send({
      status: 'error',
      message: 'error. eiei',
      data: null
    })
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
