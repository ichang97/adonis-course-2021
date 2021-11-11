import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async login({ auth, request, response }: HttpContextContract){
        const { email, password } = request.only(['email', 'password']);

        const token = await auth.attempt(email, password, {
            expiresIn: '3Days'
        })

        if(token){
            return response.status(200).send(token);
        }else{
            return response.status(403).send({
                result: 'false',
                msg: 'forbidden'
            })
        }
    }

    public async me({ auth, response }: HttpContextContract){
        return response.status(200).send({data: {user: auth.user} })
    }

    public async logout({ auth, response }: HttpContextContract){
        await auth.use('api').revoke()
        return response.status(200).send({message: 'logout success.'})
    }

}
