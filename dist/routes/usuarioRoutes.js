"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRouter = void 0;
const express_1 = __importDefault(require("express"));
const usuarioController_1 = require("../controllers/usuarioController");
class UsuarioRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.usuarioController = new usuarioController_1.UsuarioController();
        this.router.post('/criar', (req, res) => {
            this.usuarioController.criar(req, res);
        });
        this.router.get('/buscar', (req, res) => {
            this.usuarioController.buscar(req, res);
        });
        this.router.get('/listar', (req, res) => {
            this.usuarioController.listar(req, res);
        });
        this.router.put('/alterar/:id', (req, res) => {
            this.usuarioController.alterar(req, res);
        });
        this.router.delete('/excluir/:id', (req, res) => {
            this.usuarioController.excluir(req, res);
        });
    }
}
exports.UsuarioRouter = UsuarioRouter;
