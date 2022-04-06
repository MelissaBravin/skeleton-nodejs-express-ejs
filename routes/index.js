var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");
const Livro = require ("../models/livro")

router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post('/inserir', async function(req, res, next) {
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows); 
});

router.put('/atualizar', async function(req, res, next) {
  const autores = await Autor.atualizar(req.body);
  res.json(autores.rows);
});

router.delete('/deletar', async function(req, res, next) {
  const autores = await Autor.deletar(req.body);
  res.json(autores.rows);
});



router.get('/livros', async function(req, res, next) {
  const livros = await Livro.selecionar_livros();
  res.json(livros.rows);
});

router.post('/inserir_livros', async function(req, res, next) {
  const livros = await Livro.inserir_livros(req.body);
  res.json(livros.rows); 
});

router.put('/atualizar_livros', async function(req, res, next) {
  const livros = await Livro.atualizar_livros(req.body);
  res.json(livros.rows);
});

router.delete('/deletar_livros', async function(req, res, next) {
  const livros = await Livro.deletar_livros(req.body);
  res.json(livros.rows);
});

module.exports = router;

