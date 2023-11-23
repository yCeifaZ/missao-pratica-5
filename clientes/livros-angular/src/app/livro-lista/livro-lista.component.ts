import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import ControleLivrosService from '../controle-livros.service';
import { Editora } from '../editora';
import Livro from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})

export class LivroListaComponent implements OnInit {
  editoras: Array<Editora> = [];
  livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) { }

  ngOnInit(): void {
    this.servEditora.getEditoras().then((editoras: any) => {
      this.editoras = editoras;
  
      return this.servLivros.obterLivros();
    }).then((livros: any) => {
      this.livros = livros;
    }).catch((error: any) => {
      console.error('Erro ao carregar dados:', error);
    });
  }

  excluir(codigo: string): void {
    this.servLivros.excluir(codigo).then(() => {
      return this.servLivros.obterLivros();
    }).then((livros: Livro[]) => {
      this.livros = livros;
    }).catch((error: any) => {
      console.error('Erro ao excluir livro:', error);
    });
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
