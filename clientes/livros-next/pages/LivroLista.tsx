import styles from '../src/app/page.module.css';
import { useEffect, useState } from 'react';
import LinhaLivro from '../componentes/LinhaLivro';
import Head from 'next/head'
import Menu from '../componentes/Menu'
import ControleLivro, { Livro } from '../classes/controle/ControleLivros';

const LivroLista: React.FC = () => {
    const controleLivros = new ControleLivro();
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        controleLivros.obterLivros().then((data: Livro[]) => {
            setLivros(data);
            setCarregado(true);
        });
    }, [carregado]);

    const handleExcluir = (codigo: string) => {
        controleLivros.excluir(codigo).then((deleted: any) => {
            if (deleted) {
                setCarregado(false);
            }
        });
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Livro Lista</title>
            </Head>
            <Menu />
            <main style={{ width: '80%', margin: '0 auto', textAlign: 'left' }}>
                <h1>Lista de Livros</h1>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Editora</th>
                            <th>Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro: Livro, index) => (
                            <LinhaLivro key={index} livro={livro} excluir={() => handleExcluir(livro._id!)} />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default LivroLista;