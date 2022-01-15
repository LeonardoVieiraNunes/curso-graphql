const db = require('../config/db')

const novoUsuario = {
  nome: 'Pedro',
  email: 'pedro@email.com',
  senha: '12345'
}

async function exercicio() {
  // count
  const { qtde } = await db('tb_usuarios')
    .count('* as qtde')
    .returning('qtde')
    .first()
  /**
   * só vai printar quando a linha anterior for resolvida
   * ela vai ficar esperando
   * só dá pra usar await dentro de uma função async
   */
  // console.log(qtde)
  if (qtde == 0) {
    await db('tb_usuarios').insert(novoUsuario)
  }

  // consultar
  let { id } = await db('tb_usuarios')
    .select('id').limit(1).first()

  // alterar
  await db('tb_usuarios').where({ id })
    .update({ 
      nome: 'Pedro Garcia',
      email: 'pedro.garcia@gmail.com'
    })

  return await db('tb_usuarios').where({ id })
}

/*
  Função assíncrona dá para usar o then, finally...
*/
exercicio()
  .then(usuario => console.log(usuario))
  .finally(() => db.destroy())