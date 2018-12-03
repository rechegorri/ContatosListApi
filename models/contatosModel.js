'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContatoSchema = new Schema({
  name: {
    type: String,
    required: 'Entre com o nome do contato'
  },
  telefone: {
    type: String,
    required: 'Entre com o telefone do contato'
  },
});

module.exports = mongoose.model('Contato', ContatoSchema);
