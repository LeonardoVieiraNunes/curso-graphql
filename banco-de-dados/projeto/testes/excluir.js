const db = require('../config/db')

// excluir por id
db('tb_usuarios')

// created_at
// updated_at
// deleted_at
/**
 * created_at
 * updated_at
 * deleted_at
 * são campos que podem ser usados nos registros em vez de
 * fazer exclusões/edições menos "soft"
 */

// db('tb_usuarios').where({ id: 1 })
//   .delete()
//   .returning('*')
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

// apagando tudo
db('tb_usuarios').delete()
  .returning("*")
  .then(res => console.log(res))
  .finally(() => db.destroy())