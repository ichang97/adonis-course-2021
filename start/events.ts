import Event from '@ioc:Adonis/Core/Event'
import Bull from '@ioc:Rocketseat/Bull'
import SendSmsMessage from 'App/Jobs/SendSmsMessage'
/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

Event.on('new:user', (user) => {
    console.log('noti to -> ' + user.name);
    Event.emit('sent:sms', {phone: '0983334444', message: 'kuy'})
})

Event.on('sent:sms', (payload) => {
    Bull.add(new SendSmsMessage().key, payload)
    console.log(`sending sms to -> ${payload.phone} : ${payload.message}`)
})