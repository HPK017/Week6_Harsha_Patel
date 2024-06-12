"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgressDb/pgConfig"));
const ratingModel_1 = require("./ratingModel");
const reviewModel_1 = require("./reviewModel");
const paymentModel_1 = require("./paymentModel");
const bookModel_1 = require("./bookModel");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'users'
});
reviewModel_1.Review.belongsTo(User, { foreignKey: 'userId' });
reviewModel_1.Review.belongsTo(bookModel_1.Book, { foreignKey: 'bookId' });
ratingModel_1.Rating.belongsTo(User, { foreignKey: 'userId' });
ratingModel_1.Rating.belongsTo(bookModel_1.Book, { foreignKey: 'bookId' });
paymentModel_1.Payment.belongsTo(User, { foreignKey: 'userId' });
paymentModel_1.Payment.belongsTo(bookModel_1.Book, { foreignKey: 'bookId' });
//# sourceMappingURL=userModel.js.map