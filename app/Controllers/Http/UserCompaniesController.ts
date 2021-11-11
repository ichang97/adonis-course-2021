import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserCompaniesController {
  public async index ({}: HttpContextContract) {
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({ params, request, response }: HttpContextContract) {
    const { userId } = params
    const { companyId } = request.only(['companyId'])

    try{
      const user = await User.findOrFail(userId)
      await user.related('companies').sync([companyId])
      await user.load('companies')

      return response.status(200).send(user)
    }catch(e){
      return response.status(500).send({message: e.message})
    }
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
