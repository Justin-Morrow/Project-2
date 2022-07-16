const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {}

Dog.init(
    {
        dog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        dog_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        }

        // breed_id: {
        //     type: DataTypes.INTEGER,
        //     reference: {
        //         model: 'breed',
        //         key: 'id'
        //     }
        // }
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