"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Local = void 0;
class Local {
    constructor(name, descricao) {
        this.idlocal_visitacao = Math.floor(Math.random() * 1000); // Gerando um id aleatório
        this.name = name;
        this.descricao = descricao;
    }
}
exports.Local = Local;
