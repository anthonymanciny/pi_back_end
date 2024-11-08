export class Ponto {
    idlocal_visitacao: number;
    idponto_visitacao: number;
    name: string;
    email: string;
  
    constructor(name: string, email: string) {
        this.idlocal_visitacao = Math.floor(Math.random() * 1000); // Gerando um id aleatório
        this.idponto_visitacao = Math.floor(Math.random() * 1000); // Gerando um id aleatório
        this.name = name;
        this.email = email;
    }
  }