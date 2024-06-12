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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../Controller/bookController");
const router = express_1.default.Router();
router.post('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, bookController_1.createBook)(req, res); }));
router.get('/books', bookController_1.getallBooks);
router.get('/books/:id', bookController_1.getbookByID);
router.put('/books/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, bookController_1.updatebookById)(req, res); }));
router.delete('/books/:id', bookController_1.deletebookById);
exports.default = router;
//# sourceMappingURL=bookRoutes.js.map