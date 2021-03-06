const { Model, DataTypes } = require('sequelize')

class Propaganda extends Model {
    static init(sequelize) {
        super.init({
            fotoempresa: DataTypes.STRING, 
            nome: DataTypes.STRING, 
            foto1: DataTypes.STRING, 
            foto2: DataTypes.STRING, 
            txt1: DataTypes.STRING, 
            txt2: DataTypes.STRING,
            porcentagem: DataTypes.FLOAT
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Porcentagem, { foreignKey: 'propaganda_id', as: 'porcentagens'})
    }
}

module.exports = Propaganda