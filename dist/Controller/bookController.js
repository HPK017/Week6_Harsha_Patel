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
exports.deletebookById = exports.updatebookById = exports.getallBooks = exports.getbookByID = exports.createBook = void 0;
const bookService_1 = require("../service/bookService");
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookData = req.body;
    const newBook = yield (0, bookService_1.bookcreate)(bookData);
    res.send("book created successfully");
});
exports.createBook = createBook;
const getallBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield (0, bookService_1.getAllBooks)();
    res.json(books);
});
exports.getallBooks = getallBooks;
const getbookByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = parseInt(req.params.id);
    const book = yield (0, bookService_1.getBookById)(bookId);
    res.json(book);
});
exports.getbookByID = getbookByID;
const updatebookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = parseInt(req.params.id);
    const bookData = req.body;
    const updatedBook = yield (0, bookService_1.updateBookById)(bookId, bookData);
    res.json(updatedBook);
});
exports.updatebookById = updatebookById;
const deletebookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = parseInt(req.params.id);
    const deleteData = yield (0, bookService_1.deleteBookById)(bookId);
    res.json(deleteData);
});
exports.deletebookById = deletebookById;
//# sourceMappingURL=bookController.js.map