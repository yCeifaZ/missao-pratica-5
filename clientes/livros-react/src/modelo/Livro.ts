class Livro {

    codigo:string
    codEditora:number

    titulo: string
    resumo: string

    autores: Array<string>

    constructor(codigo:string, codEditora:number, titulo: string, resumo: string, autores: Array<string>) {
        this.codigo = codigo
        this.codEditora = codEditora
        this.titulo = titulo
        this.resumo = resumo
        this.autores = autores
    }
}

export default Livro