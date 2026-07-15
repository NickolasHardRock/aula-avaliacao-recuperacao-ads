const servicePessoa = require("../service/pessoa")

class ApiPessoa {

    async FindById(req, res) {
        try {
            const { id, filialId } = req.session
            const pessoa = await servicePessoa.FindById(filialId, id)

            res.status(200).send({ pessoa })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async FindAll(req, res) {
        try {
            const filialId = req.session.filialId
            const pessoas =  await servicePessoa.FindAll(filialId)

            res.status(200).send({ pessoas })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Create(req, res) {
        try {
            const filialId = req.session.filialId
            const { name, email, password, role } = req.body
            const pessoa = await servicePessoa.Create(filialId, name, email, password, role)

            res.status(200).send({ pessoa })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Update(req, res) {
        try {
            const filialId = req.session.filialId
            const id = req.params.id || req.session.id
            const { name, email, password, role } = req.body
            const pessoa = await servicePessoa.Update(filialId, id, name, email, password, role)

            res.status(200).send({ pessoa })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Delete(req, res) {
        try {
            const filialId = req.session.filialId
            const id = req.params.id || req.session.id
            const pessoa = await servicePessoa.Delete(filialId, id)

            res.status(200).send({ pessoa })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { email, password } = req.body
            const token = await servicePessoa.Login(email, password)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new ApiPessoa()