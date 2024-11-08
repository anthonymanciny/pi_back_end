// import { AgenciaRouter } from "./agencia-router";
// import { BancoRouter } from "./banco-router";
// import { ContaRouter } from "./conta-router";
import {UsuarioRouter} from "./usuarioRoutes"

export class AppRouter {
    
    private app_express: any;

    // private bancoRouter: BancoRouter;
    // private agenciaRouter: AgenciaRouter;
    // private contaRouter: ContaRouter;
    private usuarioRouter:UsuarioRouter
    
    constructor(app_server: any) {
        this.app_express = app_server;

        //criar as rotas
        // this.bancoRouter = new BancoRouter();
        // this.agenciaRouter = new AgenciaRouter();
        // this.contaRouter = new ContaRouter();
        this.usuarioRouter = new UsuarioRouter();

    }

    public carregarRotas() {
        // this.app_express.use('/api/banco', this.bancoRouter.router);
        // this.app_express.use('/api/agencia', this.agenciaRouter.router);
        // this.app_express.use('/api/conta', this.contaRouter.router);
        this.app_express.use('/api/usuario', this.usuarioRouter.router);
    }

}