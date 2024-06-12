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
exports.addRatingForBook = exports.getRatingsForBook = void 0;
const reviewService_1 = require("../service/reviewService");
const ratingService_1 = require("../service/ratingService");
const getRatingsForBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const ratings = yield (0, ratingService_1.getRatingsByBookId)(parseInt(bookId));
        res.json(ratings);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch ratings for the book' });
    }
});
exports.getRatingsForBook = getRatingsForBook;
const addRatingForBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const userId = req.user.id;
        const { rating } = req.body;
        const newReview = yield (0, reviewService_1.reviewCreate)(parseInt(bookId, 10), userId, rating);
        res.status(201).json(newReview);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to add rating for the book' });
    }
});
exports.addRatingForBook = addRatingForBook;
//# sourceMappingURL=ratingcontroller.js.map