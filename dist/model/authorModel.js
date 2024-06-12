"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgressDb/pgConfig"));
const bookModel_1 = require("./bookModel");
class Author extends sequelize_1.Model {
}
exports.Author = Author;
Author.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    birthdate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    isSystemUser: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'authors'
});
const BookAuthor = pgConfig_1.default.define('BookAuthors', {
    bookId: { type: sequelize_1.DataTypes.INTEGER, references: { model: bookModel_1.Book, key: 'id' } },
    authorId: { type: sequelize_1.DataTypes.INTEGER, references: { model: Author, key: 'id' } }
});
bookModel_1.Book.belongsToMany(Author, { through: BookAuthor });
Author.belongsToMany(bookModel_1.Book, { through: BookAuthor });
//# sourceMappingURL=authorModel.js.map