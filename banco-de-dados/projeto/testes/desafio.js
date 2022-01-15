const db = require('../config/db')

// alterar ou inserir dependendo se tem email ou nao
async function salvarUsuario(nome, email, senha) {
  
  const { qtde } = await db('tb_usuarios')
    .count('* as qtde')
    .where({ email })
    .returning('qtde')
    .first()

  if (qtde == 0) await db('tb_usuarios').insert({ nome, email, senha })

  let { id } = await db('tb_usuarios')
    .select('id')
    .where({ email })
    .first()
  
  await db('tb_usuarios')
    .where({ id })
    .update({
      nome,
      email,
      senha
    })

  return await db('tb_usuarios').select('id', 'nome', 'email', 'senha')
    .where({ id }).first()
}

// alterar ou inserir dependendo se tem nome ou nao
async function salvarPerfil(nome, rotulo) {
  const { qtde } = await db('tb_perfis')
    .count('* as qtde')
    .where({ nome })
    .returning('qtde')
    .first()

  if (qtde == 0) await db('tb_perfis').insert({ nome, rotulo })

  let { id } = await db('tb_perfis')
    .select('id')
    .where({ nome })
    .first()
  
  await db('tb_perfis')
    .where({ id })
    .update({
      rotulo
    })

  return await db('tb_perfis').select('id', 'nome', 'rotulo')
    .where({ id }).first()
}

// associar determinado usuario a um conjunto de perfis
async function adicionarPerfis(usuario, ...perfis) {
  const perfisUsuario = await db('rl_usuarios_perfis as rup')
    .select('co_perfil')
    .where({ co_usuario: usuario.id })
    .whereIn('co_perfil', perfis.map(p => p.id))
    .then(res => res.map(r => r.co_perfil))
  
  for(const perfil of perfis) {
    if(perfisUsuario.indexOf(perfil.id) < 0)
      await db('rl_usuarios_perfis').insert({co_usuario: usuario.id, co_perfil: perfil.id})
  }
}

async function executar() {
  const usuario = await salvarUsuario('Ana', 'ana@email.com', '123456')
  const perfilA = await salvarPerfil('rh', 'Pessoal')
  const perfilB = await salvarPerfil('fin', 'Financeiro')

  console.log(usuario)
  console.log(perfilA)
  console.log(perfilB)

  await adicionarPerfis(usuario, perfilA, perfilB)
}

executar()
  .catch(err => console.log(err))
  .finally(() => db.destroy())