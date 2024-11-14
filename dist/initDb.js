"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mysql2_1 = __importDefault(require("mysql2"));
// Configuração da conexão MySQL
const connection = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'seu_usuario', // substitua pelo seu usuário
    password: 'sua_senha', // substitua pela sua senha
    database: 'nome_do_banco_de_dados' // substitua pelo nome do seu banco
});
// Caminho para o arquivo SQL
const sqlPath = path_1.default.join(__dirname, '..', 'database', 'scripts', 'init.sql');
// Função para executar o script SQL
const executeSqlScript = (filePath) => {
    fs_1.default.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Erro ao ler o arquivo SQL:", err);
            return;
        }
        // Executa o script SQL no banco de dados
        connection.query(data, (error, results) => {
            if (error) {
                console.error("Erro ao executar o SQL:", error);
            }
            else {
                console.log("Script SQL executado com sucesso!");
            }
            // Fecha a conexão com o banco de dados
            connection.end();
        });
    });
};
// Chama a função para executar o script SQL
executeSqlScript(sqlPath);
