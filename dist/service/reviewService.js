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
exports.getReviews = exports.reviewCreate = void 0;
const reviewModel_1 = require("../model/reviewModel");
const reviewCreate = (bookId, userId, content) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newReview = yield reviewModel_1.Review.create({ bookId, userId, content });
        return newReview;
    }
    catch (error) {
        throw new Error('Failed to create review');
    }
});
exports.reviewCreate = reviewCreate;
const getReviews = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield reviewModel_1.Review.findAll({ where: { bookId } });
        return reviews;
    }
    catch (error) {
        throw new Error('Failed to fetch reviews');
    }
});
exports.getReviews = getReviews;
//# sourceMappingURL=reviewService.js.map