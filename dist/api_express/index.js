"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = require("cors");
const cookie_parser_1 = require("cookie-parser");
const express_session_1 = require("express-session");
const passport_1 = require("passport");
require("dotenv/config");
const post_route_1 = require("./routes/post.route");
const auth_route_1 = require("./routes/auth.route");
require("./strategies/local-strategy");
require("./strategies/jwt-strategy");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use((0, cors_1.default)());
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60000 * 60,
    },
}));
passport_1.default.serializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
});
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use('/api/posts', post_route_1.default);
app.use('/api/auth', auth_route_1.default);
const port = process.env.PORT || '3030';
app.listen(port, function () {
    console.log(`API started at http://localhost:${port}/api`);
});
app.get('/api', async (req, res) => {
    return res.json({
        message: 'Hello World',
    });
});
//# sourceMappingURL=index.js.map