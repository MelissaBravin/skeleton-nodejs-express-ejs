var express = require('express');
var router = express.Router();

const Autor = require ("../models/autor");
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

const Autor = require ("../models/autor");
router.get('/', async function(req, res, next) {
  const autores = await Autor.inserir(data, id);
  res.json(autores.rows);
});

const Autor = require ("../models/autor");
router.get('/', async function(req, res, next) {
  const autores = await Autor.atualizar(data, id);
  res.json(autores.rows);
});

const Autor = require ("../models/autor");
router.get('/', async function(req, res, next) {
  const autores = await Autor.deletar(id);
  res.json(autores.rows);
});

module.exports = router;

