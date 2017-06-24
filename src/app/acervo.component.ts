import { Component } from '@angular/core';
import { Livro } from './livro';
import { LivroService } from './livro.service';

@Component({
  selector: 'acervo',
  templateUrl: 'app/acervo.component.html'
})
export class AcervoComponent {
  acervo: Livro[];
  errorMessage: string;

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.getLivros();
  }

  getLivros(): void {
    this.livroService.getLivros()
      .subscribe(livros => {
        this.acervo = livros;
        this.totalDeLivros();
      },
      error => this.errorMessage = <any>error);
  }

  totalDeLivros() {
    let total = 0;
    this.acervo ? this.acervo.map(livro => total += livro.emEstoque) : '';
    return total;
  }
}
