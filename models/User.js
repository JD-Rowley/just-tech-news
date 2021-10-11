const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create User model
class User extends Model {}

// define table columns and config
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        // pass in imported sequelize connection
        sequelize,
        // don't automatically create timestamps
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camelcasing
        underscored: true,
        // make model name lowercase
        modelName: 'user'
    }
);

module.exports = User;