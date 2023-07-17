"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const result_joi_1 = require("./result.joi");
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const result_schema_1 = require("./result.schema");
exports.default = {
    around: {
        all: [
            (0, authentication_1.authenticate)('jwt'),
            schema_1.hooks.resolveExternal(result_schema_1.resultExternalResolver),
            schema_1.hooks.resolveResult(result_schema_1.resultResolver)
        ]
    },
    before: {
        all: [(0, authentication_1.authenticate)('jwt')],
        find: [],
        get: [feathers_validate_joi_1.default.form(result_joi_1.getResultSchema, result_joi_1.joiReadOptions)],
        create: [feathers_validate_joi_1.default.form(result_joi_1.resultSchema, result_joi_1.joiOptions), schema_1.hooks.resolveData(result_schema_1.resultDataResolver)],
        patch: [feathers_validate_joi_1.default.form(result_joi_1.resultSchema, result_joi_1.joiOptions), schema_1.hooks.resolveData(result_schema_1.resultPatchResolver)],
        remove: []
    },
    after: {
        all: []
    },
    error: {
        all: []
    }
};
//# sourceMappingURL=result.hooks.js.map