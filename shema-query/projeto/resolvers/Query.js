const { usuarios, perfis } = require('../data/db')

module.exports = {
  ola() {
    return 'Retorna uma string'
  },
  horaAtual() {
    return new Date()
  },
  usuarioLogado() {
     return {
       id: 1,
       nome: 'Leonardo',
       email: 'leonardovnun@gmail.com',
       idade: 22,
       // supondo que o banco traga um nome diferente doq está no schema do gql
       salario_real: 1970.36,
       vip: true
     }
  },
  produtoEmDestaque() {
    return {
      id: 1,
      nome: 'GEFORCE RTX 3080 Ti',
      preco: 15529.29,
      desconto: 0.15
    }
  },
  numerosMegaSena() {
    return Array(6).fill(0).map(() => parseInt(Math.random() * 60)).sort((a,b) => a - b)
  },
  usuarios() {
    return usuarios
  },
  usuario(_, { id }) {
    const selecionado = usuarios.filter(u => u.id === id)
    return selecionado ? selecionado[0] : null
  },
  perfis() {
    return perfis
  },
  perfil(_, { id }) {
    const selecionado = perfis.filter(p => p.id === id)
    return selecionado ? selecionado[0] : null
  }
}