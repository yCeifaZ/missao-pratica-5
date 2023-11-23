import { Injectable } from '@angular/core';
import Livro from './livro'; 

export interface Livro {
  _id: string | null;
  titulo: string;
  codEditora: number;
  resumo: string;
  autores: string[];
}

class ControleLivrosService {
  private baseURL: string;

  constructor(baseURL: string) {
      this.baseURL = 'http://localhost:3030/livros';
  }

  async obterLivros(): Promise<Livro[]> {
      try {
          const response = await fetch(this.baseURL);
          if (!response.ok) {
              throw new Error(`Erro ao obter livros: ${response.statusText}`);
          }

          const livros: Livro[] = await response.json() as Livro[];
          return livros;
      } catch (error: any) {
          throw new Error(`Erro ao obter livros: ${error.message}`);
      }
  }

  async excluir(codigo: string): Promise<boolean> {
      try {
          const response = await fetch(`${this.baseURL}/${codigo}`, { method: 'DELETE' });
          return response.ok;
      } catch (error: any) {
          throw new Error(`Erro ao excluir livro: ${error.message}`);
      }
  }

  async incluir(livro: Livro): Promise<boolean> {
      try {
          const response = await fetch(this.baseURL, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(livro),
          });

          return response.ok;
      } catch (error: any) {
          throw new Error(`Erro ao incluir livro: ${error.message}`);
      }
  }
}

export default ControleLivrosService;