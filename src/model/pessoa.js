const database = require('../database')
const Filial = require('./filial')

class Pessoa {
    constructor() {
        this.model = database.db.define("pessoas", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            role: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            filialId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: Filial,
                    key: "id"
                }
            },
        })

        this.model.belongsTo(Filial, {
            foreignKey: 'filialId'
        })
        Filial.hasMany(this.model, {
            foreignKey: 'filialId'
        })
    }
}

module.exports = new Pessoa().model