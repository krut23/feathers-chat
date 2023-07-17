import type { FromSchema } from '@feathersjs/schema';
import type { HookContext } from '../../declarations';
export declare const resultSchema: {
    readonly $id: "Result";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["id", "text"];
    readonly properties: {
        readonly id: {
            readonly type: "number";
        };
        readonly text: {
            readonly type: "string";
        };
    };
};
export type Result = FromSchema<typeof resultSchema>;
export declare const resultValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const resultResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    text: string;
}, HookContext>;
export declare const resultExternalResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    text: string;
}, HookContext>;
export declare const resultDataSchema: {
    readonly $id: "ResultData";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["text"];
    readonly properties: {
        readonly id: {
            readonly type: "number";
        };
        readonly text: {
            readonly type: "string";
        };
    };
};
export type ResultData = FromSchema<typeof resultDataSchema>;
export declare const resultDataValidator: import("@feathersjs/feathers").Hook;
export declare const resultDataResolver: import("@feathersjs/schema").Resolver<{
    id?: number | undefined;
    text: string;
}, HookContext>;
export declare const resultPatchSchema: {
    readonly $id: "ResultPatch";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly [];
    readonly properties: {
        readonly id: {
            readonly type: "number";
        };
        readonly text: {
            readonly type: "string";
        };
    };
};
export type ResultPatch = FromSchema<typeof resultPatchSchema>;
export declare const resultPatchValidator: import("@feathersjs/feathers").Hook;
export declare const resultPatchResolver: import("@feathersjs/schema").Resolver<{
    id?: number | undefined;
    text?: string | undefined;
}, HookContext>;
export declare const resultQuerySchema: {
    readonly $id: "ResultQuery";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly $limit: {
            readonly type: "number";
            readonly minimum: 0;
        };
        readonly $skip: {
            readonly type: "number";
            readonly minimum: 0;
        };
        readonly $sort: {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                readonly text: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
            };
        };
        readonly $select: {
            readonly type: "array";
            readonly maxItems: number;
            readonly items: {
                readonly enum?: ("id" | "text")[] | undefined;
                readonly type: "string";
            };
        };
        readonly $or: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly additionalProperties: false;
                readonly properties: {
                    readonly id: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "number";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly text: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                };
            };
        };
        readonly $and: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly additionalProperties: false;
                readonly properties: {
                    readonly id: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "number";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly text: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                } & {
                    readonly $or: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly additionalProperties: false;
                            readonly properties: {
                                readonly id: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "number";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                                readonly text: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "string";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                            };
                        };
                    };
                };
            };
        };
        readonly id: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "number";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
        readonly text: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
    };
};
export type ResultQuery = FromSchema<typeof resultQuerySchema>;
export declare const resultQueryValidator: import("@feathersjs/feathers").Hook;
export declare const resultQueryResolver: import("@feathersjs/schema").Resolver<{
    id?: number | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    text?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    $limit?: number | undefined;
    $skip?: number | undefined;
    $select?: string[] | undefined;
    $sort?: {
        [x: string]: unknown;
        id?: 1 | -1 | undefined;
        text?: 1 | -1 | undefined;
    } | undefined;
    $or?: {
        id?: number | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        text?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
    }[] | undefined;
    $and?: {
        id?: number | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        text?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        $or?: {
            id?: number | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            text?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
        }[] | undefined;
    }[] | undefined;
}, HookContext>;
