import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros";
import React, { useState, useEffect } from 'react';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

function LinhaLivro(props) {
  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);
  const autoresHtml = props.livro.autores.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <tr class="">
      <td class="col-2">
        {props.livro.titulo}
        <br></br>
        <button className="btn btn-danger" onClick={() => {
          props.excluir(props.livro._id)
          }}>Excluir</button>
      </td>
      <td class="col-6">{props.livro.resumo}</td>
      <td class="col-2">{nomeEditora}</td>
      <td class="col-2">
        <ul>{autoresHtml}</ul>
      </td>
    </tr>
  );
}

function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    controleLivro.obterLivros()
      .then((livrosDoControlador) => {
        setLivros(livrosDoControlador);
      })
      .catch((error) => {
        console.error(`Erro ao obter livros: ${error.message}`);
      });
  }, [carregado]);

  const excluir = (codigoDoLivro) => {
    controleLivro.excluir(codigoDoLivro)
      .then(() => {
        setCarregado(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error(`Erro ao excluir livro: ${error.message}`);
      });
  };

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      <table class="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro
              key={livro._id}
              livro={livro}
              excluir={() => excluir(livro._id)}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista;
