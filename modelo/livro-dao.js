const banco = require('./conexao');
const Livro = require('./livro-Schema');

const obterLivros = async () => {
    try {
        const livros = await Livro.find({});
        return livros;
    } catch (error) {
        throw new Error('Erro ao obter livros: ' + error.message);
    }
};

const incluir = async (livro) => {
    try {
        const payload = {...livro, _id: new banco.Types.ObjectId()}
        const novoLivro = await Livro.create(payload);
        return novoLivro;
    } catch (error) {
        console.log(error)
        throw new Error('Erro ao incluir livro: ' + error.message);
    }
};

const excluir = async (codigo) => {
    try {
        const resultado = await Livro.deleteOne({ _id: codigo });
        return resultado;
    } catch (error) {
        throw new Error('Erro ao excluir livro: ' + error.message);
    }
};

module.exports = {
    obterLivros,
    incluir,
    excluir
};