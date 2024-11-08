"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const Usuario_model_1 = require("../models/Usuario_model");
class UsuarioService {
    constructor() { }
    criar(novo_item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Usuario_model_1.UsuarioModel.create({
                    nomeUsuario: novo_item.nomeUsuario,
                    emailUsuario: novo_item.emailUsuario,
                    senhaUsuario: novo_item.senhaUsuario
                });
            }
            catch (erro) {
                throw new Error("Erro ao tentar incluir um novo usuario [" + erro.message + "]");
            }
        });
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield Usuario_model_1.UsuarioModel.findAll();
                return usuarios;
            }
            catch (erro) {
                throw new Error(erro.message);
            }
        });
    }
    buscar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield Usuario_model_1.UsuarioModel.findByPk(id);
                return usuario;
            }
            catch (erro) {
                throw new Error(erro.message);
            }
        });
    }
    alterar(id, item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield this.buscar(id);
                if (usuario) {
                    usuario.nomeUsuario = item.nomeUsuario;
                    usuario.emailUsuario = item.emailUsuario;
                    usuario.senhaUsuario = item.senhaUsuario;
                    usuario.save();
                }
                else {
                    throw new Error('Usuário não encontrado');
                }
            }
            catch (erro) {
                throw new Error(erro.message);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield this.buscar(id);
                if (usuario) {
                    usuario.destroy();
                }
                else {
                    throw new Error('Usuário não encontrado');
                }
            }
            catch (erro) {
                throw new Error(erro.message);
            }
        });
    }
}
exports.UsuarioService = UsuarioService;
