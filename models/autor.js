const db = require("../db")

class Autor{
   static async selecionar(){
    const connect = await db.connect();
    return await connect.query("select * from autores")
  }
  static async inserir(data){
    const connect = await db.connect();
    const sql = "insert into autores(nome, sobrenome, dt_nascimento) values($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.dt_nascimento];
    return await connect.query(sql, values);
  }
  static async atualizar(data){
    const connect = await db.connect();
    const sql = "UPDATE autores SET nome=$1, sobrenome=$2, dt_nascimento=$3 WHERE id=$4";
    const values = [data.nome, data.sobrenome, data.dt_nascimento, data.id];
    return await connect.query(sql, values);
  }
  static async deletar(){
    const connect = await db.connect();
    const sql = "DELETE from autores WHERE id=$1";
    const values = [data.id]
    return await connect.query(sql, values);
  }
}


module.exports = Autor;