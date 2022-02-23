const db = require("../db")

class Autor{
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("select * from autores")
  }
  static inserir(){

  }
  static atualizar(){
    
  }
  static deletar(){
    
  }
}


module.exports = Autor;