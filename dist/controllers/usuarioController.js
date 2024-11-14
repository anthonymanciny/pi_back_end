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
exports.UsuarioController = void 0;
const usuarioService_1 = require("../service/usuarioService");
class UsuarioController {
    constructor() {
        this.usuarioService = new usuarioService_1.UsuarioService();
    }
    criar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object.keys(req.body).length === 0) {
                res.status(400).json({ message: 'O corpo da requisição está vazio' });
                return;
            }
            try {
                yield this.usuarioService.criar(req.body);
                res.status(201).json({ message: 'Item criado com sucesso' });
            }
            catch (erro) {
                res.status(500).json(erro.message);
            }
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                res.status(400).json({ message: 'Parâmetro de busca não informado' });
                return;
            }
            const id = parseInt(req.params.id);
            try {
                const usuario = yield this.usuarioService.buscar(id);
                res.status(200).json(usuario);
            }
            catch (erro) {
                res.status(500).json(erro.message);
            }
        });
    }
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield this.usuarioService.listar();
                res.status(200).json({ usuarios });
            }
            catch (erro) {
                res.status(500).json(erro.message);
            }
        });
    }
    alterar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                res.status(400).json({ message: 'Parâmetro de busca não encontrado' });
                return;
            }
            if (Object.keys(req.body).length === 0) {
                res.status(400).json({ message: 'O corpo da requisição não foi informado' });
                return;
            }
            const id = parseInt(req.params.id);
            try {
                yield this.usuarioService.alterar(id, req.body);
                res.status(200).json({ message: 'Item alterado com sucesso' });
            }
            catch (erro) {
                res.status(500).json({ message: erro.message });
            }
        });
    }
    excluir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                res.status(400).json({ message: 'Parametro de busca não informado' });
                return;
            }
            const id = parseInt(req.params.id);
            try {
                yield this.usuarioService.delete(id);
                res.status(200).json({ message: 'Item excluído com sucesso' });
            }
            catch (erro) {
                res.status(500).json({ message: erro.message });
            }
        });
    }
}
exports.UsuarioController = UsuarioController;
