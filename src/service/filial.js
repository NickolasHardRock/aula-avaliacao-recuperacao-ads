const generatePassword = require("../fns/generate-password")
const modelFilial = require("../model/filial")
const servicePessoa = require("./pessoa")

class ServiceFilial {

    async FindById(id, transaction) {
        return modelFilial.findByPk(id, { transaction })
    }

    async Create(name, address, phone, email, transaction) {
        if(!name) {
            throw new Error('Favor informar o campo nome')
        } else if(!address) {
            throw new Error('Favor informar o campo endereço')
        } else if(!phone) {
            throw new Error('Favor informar o campo telefone')
        } else if(!email) {
            throw new Error('Favor informar o campo email')
        }
        const filial = await modelFilial.create(
            { name, address, phone, email },
            { transaction }
        )

        const password = generatePassword(18)
        const pessoa = await servicePessoa.Create(
            filial.id,
            `Admin ${name}`,
            email,
            password,
            'admin',
            transaction
        )

        return { filial, pessoa: { ...pessoa.dataValues, password } }
    }

    async Update(id, name, address, phone, email, transaction) {
        const filial = await this.FindById(id, transaction)
        if(!filial) {
            throw new Error("Filial não encontrada")
        }

        filial.name = name || filial.name
        filial.address = address || filial.address
        filial.phone = phone || filial.phone
        filial.email = email || filial.email

        return filial.save({ transaction })
    }

    async Delete(id, transaction) {
        const filial = await this.FindById(id, transaction)

        if(!filial) {
            throw new Error("Filial não encontrada")
        }

        filial.destroy({ transaction })
    }

}

module.exports = new ServiceFilial()