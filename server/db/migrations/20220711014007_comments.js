exports.up = (knex) => {
    return knex.schema.createTable('comments', (table) => {
      table.increments().primary()
      table.integer('post_id').references('Posts.id')
      table.date('date_posted')
      table.string('comment')
      table.string('posted_by')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('comments')
  }