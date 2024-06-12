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
exports.getCurrentUserDetails = exports.loginUser = exports.registerUser = void 0;
const userService_1 = require("../service/userService");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email } = req.body;
        const result = yield (0, userService_1.register)(username, password, email);
        res.status(201).send(result);
    }
    catch (error) {
        res.status(400).send("errorv occured");
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const result = yield (0, userService_1.login)(username, password);
        res.send(result);
    }
    catch (error) {
        res.status(400).send({ error });
    }
});
exports.loginUser = loginUser;
const getCurrentUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, userService_1.getCurrentuser)(req.user.id);
    res.send(user);
});
exports.getCurrentUserDetails = getCurrentUserDetails;
//# sourceMappingURL=userController.js.map