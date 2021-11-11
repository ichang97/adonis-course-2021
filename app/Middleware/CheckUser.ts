import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CheckUser {
  public async handle ({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    const user = await auth.user

    if(user && user.status !== 'active'){
      return response.status(401).send({
        message : 'User is unauthorized',
        status: 'error'
      })
    }
    await next()
  }
}
