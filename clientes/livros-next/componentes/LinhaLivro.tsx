import React from 'react';
import Livro from '../classes/modelo/Livro';
import ControleEditora from "../classes/controle/ControleEditora";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
  const autoresHtml = livro.autores.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <tr className="">
      <td className="col-2">
        {livro.titulo}
        <br></br>
        <button className="btn btn-danger" onClick={excluir}>Excluir</button>
      </td>
      <td className="col-6">{livro.resumo}</td>
      <td className="col-2">{nomeEditora}</td>
      <td className="col-2">
        <ul>{autoresHtml}</ul>
      </td>
    </tr>
  );
};

export default LinhaLivro;