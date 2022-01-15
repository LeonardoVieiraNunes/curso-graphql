const db = require('../config/db')

// const novoPerfil = {
//   nome: 'visitante',
//   rotulo: 'Visitante'
// }

// db('tb_perfis').insert(novoPerfil)
//   .then(res => console.log(res))
//   .catch(err => console.log(err.sqlMessage))
//   .finally(() => db.destroy()).

const perfilSU = {
  nome: 'root' + Math.floor(Math.random() * 100000),
  rotulo: 'Super Usuário'
}

db.insert(perfilSU)
  .returning('id')
  .into('tb_perfis')
  .then(id => console.log(id))
  .catch(err => console.log(err.sqlMessage))
  /**
   * usando apenas para fim didatico, não é recomendável 
   * encerrar sempre a conexão quando for feito algo no banco, 
   * uma vez que o knex gerencia um limite de pool de conexões em aberto
   */  .finally(() => db.destroy())