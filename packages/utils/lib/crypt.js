"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
exports.default = {
    compare: (value, hashed) => {
        return bcryptjs_1.compare(value.toString(), hashed);
    },
    hash: (value) => {
        return bcryptjs_1.hash(value.toString(), 10);
    }
};
//# sourceMappingURL=crypt.js.map