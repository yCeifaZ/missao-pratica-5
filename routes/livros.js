const express = require('express');

const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const livros  = await obterLivros();

        res.json(livros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const livroIncluido = await incluir(req.body);

        res.json({ mensagem: 'Livro incluído com sucesso'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const codigoLivro = req.params.id;

        const resultadoExclusao = await excluir(codigoLivro);

        if (resultadoExclusao.deletedCount === 1){
            res.json({ mensagem: 'Livro excluído com sucesso' });
        } else {
            res.status(404).json({ mensagem: 'Livro não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;