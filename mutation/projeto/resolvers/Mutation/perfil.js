const { perfis, proximoIdPerfil } = require('../../data/db')

const indicePerfil = (filtro) => {
  if (!filtro) return -1
  const { id, nome } = filtro
  if (id) {
    return perfis.findIndex(p => p.id === id)
  } else if (nome) {
    return perfis.findIndex(p => p.nome === nome)
  }
}

module.exports = {
  novoPerfil(_, { dados }) {
    const perfilExistente = perfis.some(p => p.nome === dados.nome)

    if (perfilExistente) throw Error("Perfil já registrado")

    const novo = {
      id: proximoIdPerfil(),
      nome: dados.nome
    }

    perfis.push(novo)
    return novo
  },
  excluirPerfil(_, { filtro }) {
    const i = indicePerfil(filtro)
    
    if (i < 0) return null

    const excluido = perfis.splice(i, 1)

    return excluido ? excluido[0] : null
  },
  alterarPerfil(_, { filtro, dados }) {
    const i = indicePerfil(filtro)

    if (i < 0) return null

    const perfilAlterado = {
      ...perfis[i],
      ...dados  
    }

    perfis.splice(i, 1, perfilAlterado)
    return perfis[i]
  }
}