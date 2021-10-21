import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TestsController {
  //GET /users
  public async index ({}: HttpContextContract) {
  }
  
  //GET /users/create
  public async create ({}: HttpContextContract) {
  }

  //POST /users
  public async store ({}: HttpContextContract) {
  }

  //GET /users/:id
  public async show ({}: HttpContextContract) {
  }

  //GET /users/:id/edit
  public async edit ({}: HttpContextContract) {
  }

  //PUT /users/:id
  public async update ({}: HttpContextContract) {
  }

  //DELETE /users/:id
  public async destroy ({}: HttpContextContract) {
  }
}
