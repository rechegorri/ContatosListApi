'use strict';
module.exports = function(app) {
  var contato = require('../controllers/contatosController');

  // contato Routes
  app.route('/contatos')
    .get(contato.listar_contatos)
    .post(contato.criar_contato);


  app.route('/contatos/:contatoId')
    .get(contato.ler_contato)
    .put(contato.atualizar_contato)
    .delete(contato.deletar_contato);
};
