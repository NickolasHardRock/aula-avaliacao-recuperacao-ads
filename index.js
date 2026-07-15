const express = require('express')
const database = require('./src/database')
const pessoaRouter = require('./src/routes/pessoa')
const filialRouter = require('./src/routes/filial')
const apiPessoa = require('./src/api/pessoa')

const port = 3000
const app = express()

app.use(express.json())

app.post('/api/v1/login', apiPessoa.Login)

app.use('/api/v1/filial', filialRouter)
app.use('/api/v1/pessoa', pessoaRouter)

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(port, () => {
            console.info(`Servidor rodando na porta ${port}`)
        })
    })
    .catch((e) => {
        console.error(`Não foi possivel conectar com o banco: ${e}`)
    })