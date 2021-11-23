import { DateTime } from 'luxon'
import { BaseModel, scope, beforeSave, column, hasMany, HasMany, manyToMany, ManyToMany} from '@ioc:Adonis/Lucid/Orm'
import UserAddress from './UserAddress'
import Company from './Company'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public status: string
  
  @column()
  public age: number | null

  @column.dateTime({ autoCreate: true, serialize: (value: DateTime) =>{
    return value.toFormat('yyyy-mm-dd HH:mm:ss')
  }
  })

  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => UserAddress)
  public UserAddresses: HasMany<typeof UserAddress>

  @manyToMany(() => Company)
  public companies: ManyToMany<typeof Company>

  //hooks
  //for example : before save user data. then, encrypt password with hash for password field.
  @beforeSave()
  public static async passwordHashing(user: User){
    user.password = await Hash.make(user.password)
  }

  //scope
  public static isActive = scope((query) => {
    query.where('status', 'active').where('age', '<', 30)
  })

  public static isInactive = scope((query) => {
    query.where('status', 'inactive')
  })

}
