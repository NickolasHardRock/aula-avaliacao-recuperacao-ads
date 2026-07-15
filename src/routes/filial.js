const express = require('express')
const ApiFilial = require('../api/filial')
const authMiddleware = require('../middleware/auth')

const filialRouter = express.Router()

filialRouter.get('/:id', authMiddleware('admin'), ApiFilial.FindById)
filialRouter.post('/', ApiFilial.Create)
filialRouter.put('/:id', authMiddleware('admin'), ApiFilial.Update)
filialRouter.delete('/:id', authMiddleware('admin'), ApiFilial.Delete)

module.exports = filialRouter