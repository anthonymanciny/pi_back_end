"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import sequelize from '../database/sequelize'
const app_router_1 = require("./routes/app-router");
const app = (0, express_1.default)();
// Middleware para definir o cabeçalho Content-Type em todas as respostas
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Ou substitua '*' pela origem permitida
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express_1.default.json());
app.get('/api', (req, res) => {
    res.send('Bem vindo ao seu Guia Virtual');
});
const appRouter = new app_router_1.AppRouter(app);
appRouter.carregarRotas();
const PORT = process.env.PORT;
try {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
}
catch (erro) {
    throw new Error('Não foi possível iniciar o servidor de API: ' + erro.message);
}
