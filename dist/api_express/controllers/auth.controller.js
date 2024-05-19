"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
const bcrypt_1 = require("bcrypt");
const prisma_1 = require("../lib/prisma");
const passport_1 = require("passport");
const jsonwebtoken_1 = require("jsonwebtoken");
const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const hashedPassword = await (0, bcrypt_1.hash)(password, Number(process.env.BCRYPT_SALT) || 10);
        try {
            await prisma_1.default.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                },
            });
            return res.status(201).json({ message: 'User creted successfully' });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                status: 'error',
                message: 'Failed to process the request. Please try again later.',
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Failed to process the request. Please try again later.',
        });
    }
};
exports.register = register;
const login = (req, res, next) => {
    passport_1.default.authenticate('local', function (err, user) {
        if (err || !user) {
            return res.status(401).json({
                message: 'Authentication failed',
            });
        }
        req.login(user, function (err) {
            if (err) {
                return next(err);
            }
            const expiresIn = process.env.JWT_EXPIRES_IN || '1d';
            const signedToken = jsonwebtoken_1.default.sign({
                sub: req.user.id,
                iat: Date.now(),
            }, process.env.JWT_SECRET, {
                expiresIn: expiresIn,
            });
            return res
                .cookie('token', signedToken, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
            })
                .status(200)
                .json({
                message: 'Logged in successfully',
            });
        });
    })(req, res, next);
};
exports.login = login;
const logout = (req, res, next) => {
    req.logout(function (error) {
        if (error) {
            return next(error);
        }
        res.clearCookie('token').status(200).json({
            message: 'Logged out successfully',
        });
    });
};
exports.logout = logout;
//# sourceMappingURL=auth.controller.js.map