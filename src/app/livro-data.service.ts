import { Injectable } from '@angular/core';
import { ACERVO } from './livros.mocks';

@Injectable()
export class LivroDataService {
    getLivros() {
        return ACERVO;
    }

}