"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = require("passport");
const passport_jwt_1 = require("passport-jwt");
const prisma_1 = require("../lib/prisma");
exports.default = passport_1.default.use(new passport_jwt_1.Strategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}, async (jwt_payload, done) => {
    try {
        const user = await prisma_1.default.user.findUnique({
            where: {
                id: jwt_payload.sub,
            },
        });
        if (user) {
            return done(null, user);
        }
    }
    catch (error) {
        return done(error, false);
    }
}));
//# sourceMappingURL=jwt-strategy.js.map