"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ponto = void 0;
class Ponto {
    constructor(name, email) {
        this.idlocal_visitacao = Math.floor(Math.random() * 1000); // Gerando um id aleatório
        this.idponto_visitacao = Math.floor(Math.random() * 1000); // Gerando um id aleatório
        this.name = name;
        this.email = email;
    }
}
exports.Ponto = Ponto;
