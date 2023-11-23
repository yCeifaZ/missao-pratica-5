import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = () => {
    const navigate = useNavigate();

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();

        const livro = {
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora
        };

        controleLivro.incluir(livro)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error(`Erro ao incluir livro: ${error.message}`);
            });
    };

    return (
        <div>
            <main>
                <h1>Dados do Livro</h1>
                <form onSubmit={incluir}>
                    <div class="mb-3">
                        <label class="form-label">Título</label>
                        <input type="text" class="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Resumo</label>
                        <textarea class="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Editora</label>
                        <select class="form-select" value={codEditora} onChange={tratarCombo}>
                            {opcoes.map(opcao => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Autores (1 por linha)</label>
                        <textarea class="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-primary">Salvar Dados</button>
                </form>
            </main>
        </div>
    );
};


export default LivroDados;