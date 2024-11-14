"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
// import { AgenciaRouter } from "./agencia-router";
// import { BancoRouter } from "./banco-router";
// import { ContaRouter } from "./conta-router";
const usuarioRoutes_1 = require("./usuarioRoutes");
class AppRouter {
    constructor(app_server) {
        this.app_express = app_server;
        //criar as rotas
        // this.bancoRouter = new BancoRouter();
        // this.agenciaRouter = new AgenciaRouter();
        // this.contaRouter = new ContaRouter();
        this.usuarioRouter = new usuarioRoutes_1.UsuarioRouter();
    }
    carregarRotas() {
        // this.app_express.use('/api/banco', this.bancoRouter.router);
        // this.app_express.use('/api/agencia', this.agenciaRouter.router);
        // this.app_express.use('/api/conta', this.contaRouter.router);
        this.app_express.use('/api/usuario', this.usuarioRouter.router);
    }
}
exports.AppRouter = AppRouter;
