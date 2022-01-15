const { perfis } = require('../data/db')

module.exports = {
  salario(usuario) {
    return usuario.salario_real
  },
  perfil(usuario) {
    const selecionado = perfis.filter(p => p.id === usuario.idPerfil)
    return selecionado ? selecionado[0] : null
  }
}