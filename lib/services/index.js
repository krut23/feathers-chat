"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const result_1 = require("./result/result");
const users_1 = require("./users/users");
const services = (app) => {
    app.configure(result_1.result);
    app.configure(users_1.user);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map