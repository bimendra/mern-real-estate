"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/properties', (req, res) => {
    return res.json({
        message: 'From properties route',
    });
});
exports.default = router;
//# sourceMappingURL=property.routes.js.map