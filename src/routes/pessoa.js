const express = require('express')
const ApiPessoa = require('../api/pessoa')
const authMiddleware = require('../middleware/auth')

const pessoaRouter = express.Router()

// opções da pessoa por si só
pessoaRouter.get('/info', authMiddleware(), ApiPessoa.FindById)
pessoaRouter.put('/', authMiddleware(), ApiPessoa.Update)
pessoaRouter.delete('/', authMiddleware(), ApiPessoa.Delete)

// opções do admin
pessoaRouter.post('/', authMiddleware('admin'), ApiPessoa.Create)
pessoaRouter.get('/', authMiddleware('admin'), ApiPessoa.FindAll)
pessoaRouter.get('/:id', authMiddleware('admin'), ApiPessoa.FindById)
pessoaRouter.put('/:id', authMiddleware('admin'), ApiPessoa.Update)
pessoaRouter.delete('/:id', authMiddleware('admin'), ApiPessoa.Delete)

module.exports = pessoaRouter