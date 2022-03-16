var express = require('express');
var router = express.Router();

const Autor = require ("../models/autor");
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.get('/inserir', async function(req, res, next) {
  const autor = {nome: "João", sobrenome: "Oliveira", dt_nascimento:"2000/09/07"}
  const autores = await Autor.inserir(autor);
  res.json(autores.rows);
});

router.get('/atualizar', async function(req, res, next) {
   const autor = {nome: "Marcia", sobrenome: "Oliveira", dt_nascimento:"2000/09/07", id:"1"}
  const autores = await Autor.atualizar(autor);
  res.json(autores.rows);
});

router.get('/deletar', async function(req, res, next) {
   const autor = {id:"1"}
  const autores = await Autor.deletar(autor);
  res.json(autores.rows);
});

module.exports = router;


