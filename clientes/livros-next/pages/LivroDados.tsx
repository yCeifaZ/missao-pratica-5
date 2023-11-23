import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ControleEditora from "../classes/controle/ControleEditora";
import styles from '../src/app/page.module.css';
import Livro from '../classes/modelo/Livro';
import Head from 'next/head'
import Menu from '../componentes/Menu'
import ControleLivro from '../classes/controle/ControleLivros';

const LivroDados: React.FC = () => {
    const controleEditora = new ControleEditora();
    const controleLivros = new ControleLivro();
    const router = useRouter();

    const [opcoes, setOpcoes] = useState(controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    })))

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(0);

    const navigate = useRouter();

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const novoLivro = {
            _id: null,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'),
            codEditora: codEditora
        };

        const inclusaoSucesso = await controleLivros.incluir(novoLivro);
        if (inclusaoSucesso) {
            router.push('/LivroLista');
        } else {
            console.log('Falha ao incluir o livro.');
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Livro Dados</title>
            </Head>
            <Menu />
            <main style={{ width: '80%', margin: '0 auto', textAlign: 'left' }}>
                <h1 className={styles.title}>Inclusão de Livro</h1>
                <form onSubmit={incluir}>
                    <div className="mb-3">
                        <label className="form-label">Título</label>
                        <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Resumo</label>
                        <textarea className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Editora</label>
                        <select className="form-select" value={codEditora} onChange={tratarCombo}>
                            {opcoes.map(opcao => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Autores (1 por linha)</label>
                        <textarea className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar Dados</button>
                </form>
            </main>
        </div>
    );
};

export default LivroDados;