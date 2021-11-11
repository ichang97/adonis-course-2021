import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddTableCompanyUsers extends BaseSchema {
  protected tableName = 'company_user'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned()
      table.integer('company_id').unsigned()
      table.foreign('user_id').references('id').inTable('users')
      table.foreign('company_id').references('id').inTable('companies')

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
