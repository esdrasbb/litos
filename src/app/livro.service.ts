import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Livro } from './livro';

@Injectable()
export class LivroService {
    private apiLivros = 'http://localhost:3002/livros';
    constructor(private http: Http) { }

    getLivros(): Observable<Livro[]> {
        return this.http.get(this.apiLivros)
            .map(this.extrairDados)
            .catch(this.handleError);
    }

    private extrairDados(res: Response) {
        let body = <Livro[]>res.json();
        return body || {};
    }
    private handleError(error: Response | any) {
        return Observable.throw(
            error.json().error || 'Erro no servidor');
    }
}