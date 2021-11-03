import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserAddresses extends BaseSchema {
  protected tableName = 'user_addresses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('address')
      table.string('sub_district')
      table.string('district')
      table.string('province')
      table.string('phone')
      table.integer('user_id').unsigned()

      table.foreign('user_id').references('id').inTable('users')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
