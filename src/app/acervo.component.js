"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var livro_service_1 = require('./livro.service');
var AcervoComponent = (function () {
    function AcervoComponent(livroService) {
        this.livroService = livroService;
    }
    AcervoComponent.prototype.ngOnInit = function () {
        this.getLivros();
    };
    AcervoComponent.prototype.getLivros = function () {
        var _this = this;
        this.livroService.getLivros()
            .subscribe(function (livros) {
            _this.acervo = livros;
            _this.totalDeLivros();
        }, function (error) { return _this.errorMessage = error; });
    };
    AcervoComponent.prototype.totalDeLivros = function () {
        var total = 0;
        this.acervo ? this.acervo.map(function (livro) { return total += livro.emEstoque; }) : '';
        return total;
    };
    AcervoComponent = __decorate([
        core_1.Component({
            selector: 'acervo',
            templateUrl: 'app/acervo.component.html'
        }), 
        __metadata('design:paramtypes', [livro_service_1.LivroService])
    ], AcervoComponent);
    return AcervoComponent;
}());
exports.AcervoComponent = AcervoComponent;
//# sourceMappingURL=acervo.component.js.map