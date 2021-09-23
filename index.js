const customExpress = require('./config/customExpress')
const conexao = require('./Infraestrutura/conexao')

conexao.connect((error)=>{
  if(error)
  console.log("Banco de dados não está conectando")
  else
  console.log("Banco Funcionando")
  const app = customExpress()
  app.listen(3000, ()=> console.log('servidor rodando na porta 3000'))
});