"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultQueryResolver = exports.resultQueryValidator = exports.resultQuerySchema = exports.resultPatchResolver = exports.resultPatchValidator = exports.resultPatchSchema = exports.resultDataResolver = exports.resultDataValidator = exports.resultDataSchema = exports.resultExternalResolver = exports.resultResolver = exports.resultValidator = exports.resultSchema = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const validators_1 = require("../../validators");
const result_joi_1 = require("./result.joi");
// Main data model schema
exports.resultSchema = {
    $id: 'Result',
    type: 'object',
    additionalProperties: false,
    required: ['id', 'text'],
    properties: {
        id: { type: 'number' },
        text: { type: 'string' }
    }
};
exports.resultValidator = (0, schema_1.getValidator)(exports.resultSchema, validators_1.dataValidator);
exports.resultResolver = (0, schema_1.resolve)({});
exports.resultExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new data
exports.resultDataSchema = {
    $id: 'ResultData',
    type: 'object',
    additionalProperties: false,
    required: ['text'],
    properties: {
        ...exports.resultSchema.properties
    }
};
exports.resultDataValidator = result_joi_1.resultValidation;
exports.resultDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing data
exports.resultPatchSchema = {
    $id: 'ResultPatch',
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        ...exports.resultSchema.properties
    }
};
exports.resultPatchValidator = result_joi_1.resultValidation;
exports.resultPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.resultQuerySchema = {
    $id: 'ResultQuery',
    type: 'object',
    additionalProperties: false,
    properties: {
        ...(0, schema_1.querySyntax)(exports.resultSchema.properties)
    }
};
exports.resultQueryValidator = result_joi_1.resultValidation;
exports.resultQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=result.schema.js.map