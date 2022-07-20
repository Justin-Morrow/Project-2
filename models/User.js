// for Login
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt"); //only user model has this for password encryption
const sequelize = require("../config/connection");

class User extends Model {
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    // }
}

User.init(
    {
        id: { //user_id????????
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
            // allowNull: true, //? will this break code 
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
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
            allowNull: false
        },
        // link: { //dog photo
        //     type: DataTypes.STRING,

        // },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        matches_list: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "",
        }
        // match: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     get() {
        //         return this.getDataValue('dog_id').split(';')
        //     },
        //     set(val) {
        //         this.setDataValue('dog_id', val.join(';'));
        //     },
        // },
        // dog_id: { // ALLOW NULL ?????????????????????
        //     type: DataTypes.INTEGER,
        //     // allowNull: false,
        //     references: {
        //         model: 'dog',
        //         key: 'id'
        //     }
        // }
    },{
        hooks: {
            beforeCreate(newUser) {
                newUser.username = newUser.username.toLowerCase();
                newUser.password = bcrypt.hashSync(newUser.password, 10);
                return newUser;
            },
            beforeUpdate(updatedUser) {
                updatedUser.username = updatedUser.username.toLowerCase();
                updatedUser.password = bcrypt.hashSync(updatedUser.password, 10);
                return updatedUser;
            },
        },
        sequelize,
        // timestamps: false,
        // freezeTableName: true,
        // underscored: true,
        // modelName: 'user',
    }
);

module.exports = User;