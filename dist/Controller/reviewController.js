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
exports.getReviewsForBook = exports.addReviewForBook = void 0;
const reviewService_1 = require("../service/reviewService");
const ratingService_1 = require("../service/ratingService");
const addReviewForBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const userId = req.user.id;
        const { content } = req.body;
        const newReview = yield (0, reviewService_1.reviewCreate)(parseInt(bookId, 10), userId, content);
        res.status(201).json(newReview);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to add review for the book' });
    }
});
exports.addReviewForBook = addReviewForBook;
const getReviewsForBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const reviews = yield (0, ratingService_1.getRatingsByBookId)(parseInt(bookId));
        res.status(200).json(reviews);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews for the book' });
    }
});
exports.getReviewsForBook = getReviewsForBook;
//# sourceMappingURL=reviewController.js.map