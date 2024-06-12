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
exports.deleteBookById = exports.updateBookById = exports.getBookById = exports.getAllBooks = exports.bookcreate = void 0;
const authorModel_1 = require("../model/authorModel");
const bookModel_1 = require("../model/bookModel");
const ratingModel_1 = require("../model/ratingModel");
const reviewModel_1 = require("../model/reviewModel");
const bookcreate = (book) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = yield bookModel_1.Book.create(book);
        if (app) {
            return app;
        }
    }
    catch (err) {
        throw err;
    }
});
exports.bookcreate = bookcreate;
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookModel_1.Book.findAll();
        return books;
    }
    catch (error) {
        throw new Error("Failed to fetch books");
    }
});
exports.getAllBooks = getAllBooks;
const getBookById = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookModel_1.Book.findByPk(bookId, { include: [authorModel_1.Author, ratingModel_1.Rating, reviewModel_1.Review] });
        if (!book) {
            console.log(book);
            throw new Error;
        }
        return book;
    }
    catch (error) {
        throw error;
    }
});
exports.getBookById = getBookById;
const updateBookById = (bookId, bookData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookModel_1.Book.findByPk(bookId);
        if (!book) {
            throw new Error("Book not found");
        }
        yield book.update(bookData);
        return book;
    }
    catch (error) {
        throw error;
    }
});
exports.updateBookById = updateBookById;
const deleteBookById = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookModel_1.Book.findByPk(bookId);
        if (!book) {
            throw new Error("Book not found");
        }
        yield book.destroy();
        return { message: "Book deleted successfully" };
    }
    catch (error) {
        throw new Error("Failed to delete book");
    }
});
exports.deleteBookById = deleteBookById;
//# sourceMappingURL=bookService.js.map