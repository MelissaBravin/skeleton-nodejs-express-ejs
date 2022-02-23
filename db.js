let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://uhtobedq:OTYJ2sVymya0WmTXDFdNr3t5485t0nDl@kesavan.db.elephantsql.com/uhtobedq"
  });

  global.connection = pool 
  return pool.connect();
}

module.exports = { conecct }