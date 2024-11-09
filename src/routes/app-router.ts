// import { AgenciaRouter } from "./agencia-router";
// import { BancoRouter } from "./banco-router";
// import { ContaRouter } from "./conta-router";
import {UsuarioRouter} from "./usuarioRoutes"

export class AppRouter {
    
    private app_express: any;

    private usuarioRouter:UsuarioRouter
    
    constructor(app_server: any) {
        this.app_express = app_server;

        //criar as rotas
     
        this.usuarioRouter = new UsuarioRouter();

    }
    public carregarRotas() {

        this.app_express.use('/api/usuario', this.usuarioRouter.router);
    }

}