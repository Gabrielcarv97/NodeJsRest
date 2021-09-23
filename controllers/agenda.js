const Agenda = require('../models/agenda')

  module.exports= app =>{
      app.post('/novoUsuario', function (req, res) {
        const agenda = req.body
        Agenda.criarAgenda(agenda, res)
        res.send('Enviado ')
      })

      app.delete('/deletePorNome/:nome', function (req, res) {
        console.log(req.params)
        const nome = req.params.nome
        Agenda.ExcluirPorNome(nome, res)
      })
      
      app.patch('/alterarDiaOuMes', function (req, res) {
        const resum = {
          "nome" : req.body.nome,
          "diaAniversario" : parseInt(req.body.diaAniversario),
          "mesAniversario" : parseInt(req.body.mesAniversario),
        }
        Agenda.alterarDiaouMes(resum, res)
      })

      app.get('/consultarDiaEMes/:DIA_ANIVERSARIO/:MES_ANIVERSARIO', function (req, res) {
        const ids = {
          "diaAniversario" : parseInt(req.params.DIA_ANIVERSARIO),
          "mesAniversario" : parseInt(req.params.MES_ANIVERSARIO),
        }
        Agenda.consultarDiaeMes(ids, res)
      })

      app.get('/consultaPorMes/:MES_ANIVERSARIO', (req,res)=>{
        const ids = {
          "mesAniversario" : parseInt(req.params.MES_ANIVERSARIO),
        }
        Agenda.consultarPorMes(ids, res)
      })

      
  }