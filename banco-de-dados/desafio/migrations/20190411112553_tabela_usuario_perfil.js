
exports.up = function(knex, Promise) {
    return knex.schema.createTable('rl_usuarios_perfis', table => {
        table.integer('usuario_id').unsigned()
        table.integer('perfil_id').unsigned()
        table.foreign('usuario_id').references('tb_usuarios.id')
        table.foreign('perfil_id').references('tb_perfis.id')
        table.primary(['usuario_id', 'perfil_id'])
    }).then(function () {
        return knex('rl_usuarios_perfis').insert([
            { usuario_id: 1, perfil_id: 2 },
            { usuario_id: 1, perfil_id: 3 },
            { usuario_id: 2, perfil_id: 2 },
            { usuario_id: 3, perfil_id: 1 },
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('rl_usuarios_perfis')
};
