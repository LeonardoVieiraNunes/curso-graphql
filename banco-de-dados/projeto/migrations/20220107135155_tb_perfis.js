
exports.up = function(knex) {
  /*
   * pode inserir diretamente na migration
   * quando são dados estáticos como estados da federação por exemplo
   * seed:make seria para inserir dados para usar em testes por exemplos
   */
  return knex.schema.createTable('tb_perfis', table => {
    table.increments('id').primary()
    table.string('nome').notNull().unique()
    table.string('rotulo').notNull()
  }).then(function() {
    return knex('tb_perfis').insert([
      { nome: 'comum', rotulo: 'Comum' },
      { nome: 'admin', rotulo: 'Administrador' },
      { nome: 'master', rotulo: 'Master' },
    ])
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tb_perfis')
};
