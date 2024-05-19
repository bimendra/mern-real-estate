"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = require("passport");
const passportLocal = require("passport-local");
const prisma_1 = require("../lib/prisma");
const bcrypt_1 = require("bcrypt");
exports.default = passport_1.default.use(new passportLocal.Strategy({
    usernameField: 'email',
}, async function verify(email, password, done) {
    try {
        const foundUser = await prisma_1.default.user.findUnique({
            where: { email },
        });
        if (!foundUser) {
            throw new Error('User not found');
        }
        if (!(await bcrypt_1.default.compare(password, foundUser.password))) {
            throw new Error('Invalid credentials');
        }
        done(null, foundUser);
    }
    catch (error) {
        done(error, undefined);
    }
}));
//# sourceMappingURL=local-strategy.js.map