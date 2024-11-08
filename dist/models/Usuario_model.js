"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModel = void 0;
const sequelize_1 = require("sequelize");
// import sequelize from '../../database/sequelize'
class UsuarioModel extends sequelize_1.Model {
    get idUsuario() {
        return this._idUsuario;
    }
    set idUsuario(value) {
        this._idUsuario = value;
    }
    get nomeUsuario() {
        return this._nomeUsuario;
    }
    set nomeUsuario(value) {
        this._nomeUsuario = value;
    }
    get emailUsuario() {
        return this._emailUsuario;
    }
    set emailUsuario(value) {
        this._emailUsuario = value;
    }
    get senhaUsuario() {
        return this._senhaUsuario;
    }
    set senhaUsuario(value) {
        this._senhaUsuario = value;
    }
}
exports.UsuarioModel = UsuarioModel;
// UsuarioModel.init(
//     {
//         idUsuario: {
//             type: DataTypes.INTEGER.UNSIGNED,
//             primaryKey: true
//         },
//         emailUsuario: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true
//         },
//         nomeUsuario: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: false
//         },
//         senhaUsuario: {
//             type: DataTypes.STRING,
//         }
//     },
//     {
//         sequelize,
//         modelName: "UsuarioModel",
//         tableName: "tbl_usuario",
//         timestamps: false,
//     }
// )
