"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ratingcontroller_1 = require("../Controller/ratingcontroller");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.post('ratings/:bookId/', auth_1.authenticate, ratingcontroller_1.addRatingForBook);
router.get('ratings/:bookId/', ratingcontroller_1.getRatingsForBook);
exports.default = router;
``;
//# sourceMappingURL=ratingRoutes.js.map