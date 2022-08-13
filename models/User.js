// for Login
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt"); //only user model has this for password encryption
const sequelize = require("../config/connection");

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false, //? will this break code 
        }, 
        // email: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true,
        //     validate: {
        //         isEmail: true,
        //     }
        // },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            }
        },
        // name: {
        //     type: DataTypes.STRING,
        //     allowNull: true // testing with true
        // },
        // breed: {
        //     type: DataTypes.STRING,
        //     allowNull: true // testing with true
        // },
        // age: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true, // testing with true
        //     validate: {
        //         isNumeric: true
        //     }
        // },
        // gender: {
        //     type: DataTypes.STRING,
        //     allowNull: true // testing with true
        // },
        // // link: { //dog photo
        // //     type: DataTypes.STRING,

        // // },
        // location: {
        //     type: DataTypes.STRING,
        //     allowNull: true // testing with true
        // },
        // matches_list: {
        //     type: DataTypes.TEXT,
        //     allowNull: true,
        //     defaultValue: "",
        // }
        
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
            beforeCreate(userData) {
                userData.username = userData.username.toLowerCase();
                userData.password = bcrypt.hashSync(userData.password, 10);
                return userData;
            },
            beforeUpdate(updatedUser) {
                updatedUser.username = updatedUser.username.toLowerCase();
                updatedUser.password = bcrypt.hashSync(updatedUser.password, 10);
                return updatedUser;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;