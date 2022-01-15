const usuarios = [{
  id: 1,
  nome: 'Leonardo',
  email: 'leonardo@email.com',
  idade: 22,
  idPerfil: 1,
  status: 'ATIVO',
}, {
  id: 2,
  nome: 'Carolina',
  email: 'carolina@email.com',
  idade: 20,
  idPerfil: 1,
  status: 'INATIVO',

}, {
  id: 3,
  nome: 'Dragaozinho',
  email: 'dragaozinho@email.com',
  idade: 2,
  idPerfil: 2,
  status: 'BLOQUEADO',

}]

const perfis = [
  { id: 1,nome: 'Comum' },
  { id: 2, nome: 'Administrador' }
]

module.exports = { usuarios, perfis }