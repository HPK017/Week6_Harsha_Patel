"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const reviewController_1 = require("../Controller/reviewController");
const router = (0, express_1.Router)();
router.post('books/:bookId/reviews', auth_1.authenticate, reviewController_1.addReviewForBook);
router.get('books/:bookId/reviews', reviewController_1.getReviewsForBook);
exports.default = router;
//# sourceMappingURL=reviewRoutes.js.map