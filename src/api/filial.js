const serviceFilial = require("../service/filial")

class ApiFilial {

    async FindById(req, res) {
        try {
            const { id } = req.params
            const filial = await serviceFilial.FindById(id)

            res.status(200).send({ filial })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Create(req, res) {
        try {
            const { name, address, phone, email } = req.body
            const filial = await serviceFilial.Create(name, address, phone, email)

            res.status(200).send({ filial })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Update(req, res) {
        try {
            const { id } = req.params
            const { name, address, phone, email } = req.body
            const filial = await serviceFilial.Update(id, name, address, phone, email)

            res.status(200).send({ filial })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Delete(req, res) {
        try {
            const { id } = req.params
            const filial = await serviceFilial.Delete(id)

            res.status(200).send({ filial })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new ApiFilial()