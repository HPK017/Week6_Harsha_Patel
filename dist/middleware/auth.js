"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const credentials_1 = require("../common/credentials");
const authenticate = (req, res, next) => {
    let authheaders = req.headers["authorization"];
    let token = authheaders && authheaders.split(" ")[1];
    if (token == null) {
        return res.send("token not found");
    }
    jsonwebtoken_1.default.verify(token, `${credentials_1.JWT_KEY}`, (err, user) => {
        if (err) {
            return res.send("invalid token");
        }
        else {
            req.user = user;
            next();
        }
    });
};
exports.authenticate = authenticate;
//# sourceMappingURL=auth.js.map