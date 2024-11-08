"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(nomeUsuario, emailUsuario, senhaUsuario) {
        this.idUsuario = Math.floor(Math.random() * 1000); // Gerando um id aleatório
        this.nomeUsuario = nomeUsuario;
        this.emailUsuario = emailUsuario;
        this.senhaUsuario = senhaUsuario;
    }
}
exports.User = User;
