'use strict';


var mongoose = require('mongoose'),
  Contato = mongoose.model('Contato');

exports.listar_contatos = function(req, res) {
  Contato.find({}, function(err, contato) {
    if (err)
      res.send(err);
    res.json(contato);
  });
};




exports.criar_contato = function(req, res) {
  var new_task = new contato(req.body);
  new_task.save(function(err, contato) {
    if (err)
      res.send(err);
    res.json(contato);
  });
};


exports.ler_contato = function(req, res) {
  Contato.findById(req.params.taskId, function(err, contato) {
    if (err)
      res.send(err);
    res.json(contato);
  });
};


exports.atualizar_contato = function(req, res) {
  Contato.findOneAndUpdate({_id: req.params.cotatoId}, req.body, {new: true}, function(err, contato) {
    if (err)
      res.send(err);
    res.json(contato);
  });
};


exports.deletar_contato = function(req, res) {


  Contato.remove({
    _id: req.params.contatoId
  }, function(err, contato) {
    if (err)
      res.send(err);
    res.json({ message: 'Contato deletado!' });
  });
};
