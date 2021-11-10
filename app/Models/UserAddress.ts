import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserAddress extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public address: string
  
  @column()
  public sub_district: string

  @column()
  public district: string

  @column()
  public province: string

  @column()
  public phone: string

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
