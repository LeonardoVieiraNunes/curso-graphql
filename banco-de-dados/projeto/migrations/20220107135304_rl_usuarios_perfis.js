
exports.up = function(knex) {
  return knex.schema.createTable('rl_usuarios_perfis', table => {
    table.integer('co_usuario').unsigned()
    table.integer('co_perfil').unsigned()
    table.foreign('co_usuario').references('tb_usuarios.id')
    table.foreign('co_perfil').references('tb_perfis.id')
    table.primary(['co_usuario', 'co_perfil'])
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('rl_usuarios_perfis')
};
