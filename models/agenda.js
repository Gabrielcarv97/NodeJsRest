const conexao = require('../Infraestrutura/conexao')

class Agenda {
    criarAgenda(usuarioNovo, res) {
        const sql = 'INSERT INTO AGENDA SET ?'
        conexao.query(sql, usuarioNovo,(erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } 
            else {
                res.status(201).json(resultado)
            }
        })
    }

    ExcluirPorNome(nome, res) {
        const sql = `DELETE FROM AGENDA WHERE NOME_PESSOA = '${nome}'`
        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(201).json(resultado)
            }
        })
    }
    alterarDiaouMes(resum, res) { 
        const sql = `UPDATE AGENDA
        SET DIA_ANIVERSARIO = ${resum.diaAniversario ? resum.diaAniversario:''},
        MES_ANIVERSARIO = ${resum.mesAniversario ? resum.mesAniversario:''}
        WHERE NOME_PESSOA= '${resum.nome}'`
        conexao.query(sql,(erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(200).json(resultado)
            }
        })
    }
    consultarDiaeMes(ids, res) { 
        const sql = `SELECT * FROM AGENDA WHERE DIA_ANIVERSARIO = ${ids.diaAniversario} AND MES_ANIVERSARIO = ${ids.mesAniversario}`
        conexao.query(sql,(erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(200).json(resultado)
            }
        })
    }
    consultarPorMes(ids, res) { 
        const sql = `SELECT * FROM AGENDA WHERE MES_ANIVERSARIO = ${ids.mesAniversario}`
        conexao.query(sql,(erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(200).json(resultado)
            }
        })
    }
    consultarPorLetra(ids, res) { 
        const sql = `SELECT * FROM AGENDA WHERE NOME_PESSOA LIKE '${ids.letra}%'`
        conexao.query(sql,(erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(200).json(resultado)
            }
        })
    }
    ordenaPorNome(res) { 
        const sql = `SELECT * FROM AGENDA ORDER BY NOME_PESSOA ASC`
        conexao.query(sql,(erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(200).json(resultado)
            }
        })
    }
    ordenaPorMes(res) { 
        const sql = `SELECT * FROM AGENDA ORDER BY MES_ANIVERSARIO ASC`
        conexao.query(sql,(erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(200).json(resultado)
            }
        })
    }
}
module.exports = new Agenda