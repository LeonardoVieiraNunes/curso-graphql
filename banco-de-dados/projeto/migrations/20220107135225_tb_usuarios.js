
exports.up = function(knex) {
  return knex.schema.createTable('tb_usuarios', table => {
    table.increments('id').primary()
    table.string('nome').notNull()
    table.string('email').notNull().unique()
    table.string('senha', 60).notNull()
    table.boolean('ativo').notNull().defaultTo(true)
    table.timestamp('dt_criacao').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tb_usuarios')
};
