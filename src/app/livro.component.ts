import { Component, Input } from '@angular/core';
import { Livro } from './livro';

@Component({
    selector: 'livro',
    templateUrl: 'app/livro.component.html'
})

export class LivroComponent {
    @Input() livro: Livro;

    adicionarUmNoCarrinho(livro: Livro) {
        if (livro.quantidade < livro.emEstoque) {
            livro.quantidade++;
        }
    }
}