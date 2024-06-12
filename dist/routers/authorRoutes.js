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
const authorController_1 = require("../Controller/authorController");
const bookController_1 = require("../Controller/bookController");
const router = express_1.default.Router();
router.post('/authors', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, authorController_1.createAuthors)(req, res); }));
router.get('/authors', authorController_1.getallAuthors);
router.get('/authors/:id', authorController_1.getauthorByID);
router.put('/authors/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, authorController_1.updateauthorById)(req, res); }));
router.delete('/authors/:id', bookController_1.deletebookById);
exports.default = router;
//# sourceMappingURL=authorRoutes.js.map