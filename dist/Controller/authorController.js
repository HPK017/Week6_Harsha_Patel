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
exports.deleteauthorById = exports.updateauthorById = exports.getauthorByID = exports.getallAuthors = exports.createAuthors = void 0;
const authorService_1 = require("../service/authorService");
const createAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authorData = req.body;
    const newAuthor = yield (0, authorService_1.authorcreate)(authorData);
    res.send("Author created successfully");
});
exports.createAuthors = createAuthors;
const getallAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authors = yield (0, authorService_1.getAllAuthors)();
    res.json(authors);
});
exports.getallAuthors = getallAuthors;
const getauthorByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authorId = parseInt(req.params.id);
    const author = yield (0, authorService_1.getAuthorById)(authorId);
    res.json(author);
});
exports.getauthorByID = getauthorByID;
const updateauthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authorId = parseInt(req.params.id);
    const authorData = req.body;
    const updatedAuthor = yield (0, authorService_1.updateAuthorById)(authorId, authorData);
    res.json(updatedAuthor);
});
exports.updateauthorById = updateauthorById;
const deleteauthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authorId = parseInt(req.params.id);
    const authourData = yield (0, authorService_1.deleteAuthorById)(authorId);
    res.json(authourData);
});
exports.deleteauthorById = deleteauthorById;
//# sourceMappingURL=authorController.js.map