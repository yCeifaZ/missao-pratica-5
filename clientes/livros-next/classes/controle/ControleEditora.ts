import Editora from "../modelo/Editora";

let editoras: Array<Editora> = [
    {
        codEditora: 1,
        nome: "Alta Books",
    },
    {
        codEditora: 2,
        nome: "Bookman",
    },
    {
        codEditora: 3,
        nome: "Addison Wesley",
    },
    {
        codEditora: 4,
        nome: "Pearson",
    },
]

class ControleEditora {

    getNomeEditora(codEditora: number): string {
        const editoraResult = editoras.find((editora: Editora) => editora.codEditora === codEditora);
        return editoraResult?.nome ?? ""

    }

    getEditoras(): Array<Editora> {
        return editoras
    }

}

export default ControleEditora