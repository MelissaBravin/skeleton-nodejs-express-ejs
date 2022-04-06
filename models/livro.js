const db = require("../db")

class Livro{
   static async selecionar_livros(){
    const connect = await db.connect();
    return await connect.query("select * from livros")
  }
  static async inserir_livros(data){
    const connect = await db.connect();
    const sql = "insert into livros(autor, titulo, dt_public, editora, preco) values($1, $2, $3, $4, $5)";
    const values = [data.autor, data.titulo, data.dt_public, data.editora, data.preco];
    return await connect.query(sql, values);
  }
  static async atualizar_livros(data){
    const connect = await db.connect();
    const sql = "UPDATE livros SET autor=$1, titulo=$2, dt_public=$3, editora=$4, preco=$5 WHERE id=$6";
    const values = [data.autor, data.titulo, data.dt_public, data.editora, data.preco , data.id];
    return await connect.query(sql, values);
  }
  static async deletar_livros(data){
    const connect = await db.connect();
    const sql = "DELETE from livros WHERE id=$1";
    const values = [data.id]
    return await connect.query(sql, values);
  }

  static async selecionar_autor(data){
    const connect = await db.connect();
    const sql = "SELECT * from livros WHERE autor=$1";
    const values = [data.id]
    return await connect.query(sql, values);
  }
}



module.exports = Livro;