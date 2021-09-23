const mysql = require('mysql')

var conexao = mysql.createConnection({
    host     : 'us-cdbr-east-04.cleardb.com',
    user     : 'b22a9090ca40f9',
    password : '5c2fdc24',
    database : 'heroku_92ca961f2925005'
  });

  module.exports = conexao