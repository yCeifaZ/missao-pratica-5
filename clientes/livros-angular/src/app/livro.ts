class Livro {
 
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: Array<string>;

  constructor(
    _id: string,
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: Array<string>
  ) {
    this._id = _id;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}

export default Livro;