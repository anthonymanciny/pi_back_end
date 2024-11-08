export class Local {

    idlocal_visitacao: number;
    name: string;
    descricao: string;
  
    constructor(name: string, descricao: string) {
      this.idlocal_visitacao = Math.floor(Math.random() * 1000); // Gerando um id aleatório
      this.name = name;
      this.descricao = descricao;
    }
  }