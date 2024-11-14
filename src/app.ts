import express, { Request, Response } from 'express'
// import sequelize from '../database/sequelize'
import { AppRouter } from './routes/app-router'
import sequelize from './database/database';
import Usuario from './models/Usuario';

const app = express()

// Middleware para definir o cabeçalho Content-Type em todas as respostas
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Ou substitua '*' pela origem permitida
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.json())
app.get('/api', (req: Request, res: Response) => {
    res.send('Bem vindo ao seu Guia Virtual')
})

const appRouter = new AppRouter(app);
appRouter.carregarRotas();

const iniciarApp = async () => {
    try {
      // Sincronizando a base de dados (cria as tabelas se não existirem)
      await sequelize.sync({ force: true });
  
      console.log('Banco de dados sincronizado!');
  
      // Criando um usuário de exemplo
      const usuario = await Usuario.create({
        nome: 'João Silva',
        email: 'joao.silva@example.com',
        senha: 'senha123',
      });
  
      console.log(`Usuário criado: ${usuario.nome}`);
  
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    }
  };
  
  iniciarApp();





const PORT = process.env.PORT;
try {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    })
} catch (erro: any) {
    throw new Error('Não foi possível iniciar o servidor de API: ' + erro.message)
}