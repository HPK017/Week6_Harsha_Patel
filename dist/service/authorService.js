"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthorById = exports.updateAuthorById = exports.getAuthorById = exports.getAllAuthors = exports.authorcreate = void 0;
const authorModel_1 = require("../model/authorModel");
const bookModel_1 = require("../model/bookModel");
const authorcreate = (author) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = yield authorModel_1.Author.create(author);
        if (app) {
            return app;
        }
    }
    catch (err) {
        throw err;
    }
});
exports.authorcreate = authorcreate;
const getAllAuthors = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield authorModel_1.Author.findAll();
        return authors;
    }
    catch (error) {
        throw new Error("Failed to fetch books");
    }
});
exports.getAllAuthors = getAllAuthors;
const getAuthorById = (authorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield authorModel_1.Author.findByPk(authorId, { include: bookModel_1.Book });
        if (!author) {
            throw new Error("Author not found");
        }
        return author;
    }
    catch (error) {
        throw new Error("Failed to fetch Author");
    }
});
exports.getAuthorById = getAuthorById;
const updateAuthorById = (authorId, authorData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield bookModel_1.Book.findByPk(authorId);
        if (!author) {
            throw new Error("Author not found");
        }
        yield author.update(authorData);
        return author;
    }
    catch (error) {
        throw error;
    }
});
exports.updateAuthorById = updateAuthorById;
const deleteAuthorById = (authorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield bookModel_1.Book.findByPk(authorId);
        if (!author) {
            throw new Error("Author not found");
        }
        yield author.destroy();
        return { message: "Author deleted successfully" };
    }
    catch (error) {
        throw new Error("Author to delete book");
    }
});
exports.deleteAuthorById = deleteAuthorById;
//# sourceMappingURL=authorService.js.map