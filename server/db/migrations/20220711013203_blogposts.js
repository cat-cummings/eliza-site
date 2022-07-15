exports.up = function(knex) {
  return knex.schema.createTable('blogposts', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.date('date_created')
    table.integer('comment_count').defaultsTo(0)
    table.string('post')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('blogposts')
};
