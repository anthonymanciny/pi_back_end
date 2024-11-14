import { Sequelize } from 'sequelize';

// Criação da instância do Sequelize para conectar ao banco de dados MySQL
const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;