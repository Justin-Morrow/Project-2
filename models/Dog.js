const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {}

Dog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        dog_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // link: { //dog photo
        //     type: DataTypes.STRING,

        // },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // match: { //finish
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     get() {
        //         return this.getDataValue('user_id').split(';')
        //     },
        //     set(val) {
        //         this.setDataValue('user_id', val.join(';'));
        //     },
        // },
        user_id: { // ALLOW NULL?????????????????????
            type: DataTypes.INTEGER,
            // allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        //link to database
        sequelize,
        // set to false to remove `created_at` and `updated_at` fields
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'dog',
    }
);

module.exports = Dog;