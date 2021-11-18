import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Application from '@ioc:Adonis/Core/Application'
import { schema } from '@ioc:Adonis/Core/Validator'
import Drive from '@ioc:Adonis/Core/Drive'

export default class FilesController {
    async upload({ request, response }: HttpContextContract){
        const fileSchema = schema.create({
            file: schema.file({
                size: '2mb',
                extnames: ['jpg', 'png', 'gif']
            })
        })

        const { file } = await request.validate({schema: fileSchema})

        //upload to local
        // if(file){
        //     await file.move(`${Application.publicPath()}/images`, {
        //         // name: 'xxx'
        //     })

        //     return response.status(200).send({
        //         result: 'success',
        //         msg: 'file uploaded.'
        //     })
        // }else{
        //     return response.status(500).send({
        //         result: 'error',
        //         msg: 'No file request.'
        //     })
        // }

        //upload to s3
        if(file){
            await file.moveToDisk('images', {
                visibility: 'private',
            }, 's3')

            return response.status(200).send({
                result: 'success',
                msg: 'file uploaded.',
                s3_url: await Drive.use('s3').getSignedUrl(`${file.fileName}`)
            })
        }else{
            return response.status(500).send({
                result: 'error',
                msg: 'No file request.'
            })
        }


    }
}
