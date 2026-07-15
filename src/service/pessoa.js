require('dotenv').config()
const modelPessoa = require("../model/pessoa")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const roles = ['admin', 'employee']
const salt = 12
const secretKey = process.env.JWT_SECRET

class ServicePessoa {
    async FindAll(filialId, transaction) {
        return modelPessoa.findAll(
            { where: { filialId }, transaction }
        )
    }

    async FindById(filialId, id, transaction) {
        return modelPessoa.findOne(
            { where: { filialId, id }, transaction }
        )
    }

    async Create(filialId, name, email, password, role, transaction) {
        if(!filialId) {
            throw new Error("Favor informar a filial")
        } else if(!name) {
            throw new Error("Favor informar o nome")
        } else if(!email) {
            throw new Error("Favor informar o email")
        } else if(!password) {
            throw new Error("Favor informar a senha")
        } else if(!role || !roles.includes(role)) {
            throw new Error("Favor informar a permissão corretamente")
        }

        const hashPass = await bcrypt.hash(password, salt)

        return modelPessoa.create(
            { filialId, name, email, password: hashPass, role },
            { transaction }
        )
    }

    async Update(filialId, id, name, email, password, role, transaction) {
        const oldPessoa = await this.FindById(filialId, id, transaction)
        if(!oldPessoa) {
            throw new Error("Pessoa não encontrada")
        }

        if(role && !roles.includes(role)) {
            throw new Error("Favor informar a permissão corretamente")
        }

        if(role && oldPessoa.role === "admin") {
            oldPessoa.role = role
        }

        oldPessoa.name = name || oldPessoa.name
        oldPessoa.email = email || oldPessoa.email
        oldPessoa.password = password ? await bcrypt.hash(password, salt) : oldPessoa.password

        await oldPessoa.save({ transaction })

        return oldPessoa
    }

    async Delete(filialId, id, transaction) {
        const oldPessoa = await this.FindById(filialId, id, transaction)

        if(!oldPessoa) {
            throw new Error("Pessoa não encontrada")
        }

        oldPessoa.destroy({ transaction })
    }

    async Login(email, password, transaction) {
        if(!email || !password) {
            throw new Error("Favor informar email e senha")
        }

        const pessoa = await modelPessoa.findOne(
            { where: { email } },
            { transaction }
        )
        if(!pessoa) {
            throw new Error("Email ou senha inválidos")
        }

        const verify = await bcrypt.compare(password, pessoa.password)

        if(verify) {
            return jwt.sign({
                id: pessoa.id,
                role: pessoa.role,
                filialId: pessoa.filialId
            }, secretKey, { expiresIn: 60 * 60 } )
        }

        throw new Error("Email ou senha inválidos")
    }

    async Verify(id, role, transaction) {
        return modelPessoa.findOne(
            { where: { id, role }, transaction }
        )
    }
}

module.exports = new ServicePessoa()