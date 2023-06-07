
class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos(){
    try {
      return this.atributos();  
    } catch (error) {
      console.log(error) 
    }
  } 

  atributos() {
    if (this.nome != ""  && this.idade != "" && this.turma != ""){
      return {
        nome: this.nome,
        idade: this.idade,
        turma: this.turma
      };
    } else {
      throw new MeuErro("Deu erro")
    }
  }
}


const estudante = new Estudante("", "", "");

const atributos = estudante.mostrarAtributos();

console.log(atributos)
//console.log(atributos.nome);   
//console.log(atributos.idade);  
//console.log(atributos.turma); 

