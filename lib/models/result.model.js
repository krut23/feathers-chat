"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize"));
const users_model_1 = require("./users.model");
class Result extends sequelize_1.Model {
}
exports.Result = Result;
Result.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    student_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: users_model_1.User,
            key: 'id'
        }
    },
    subject: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    marks: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'result',
    sequelize: sequelize_2.default,
    timestamps: false
});
Result.belongsTo(users_model_1.User, { foreignKey: 'student_id' });
users_model_1.User.hasMany(Result, { foreignKey: 'student_id' });
//# sourceMappingURL=result.model.js.map