import Joi from 'joi';
export declare const resultSchema: Joi.ObjectSchema<any>;
export declare const getResultSchema: Joi.ObjectSchema<any>;
export declare const resultValidation: import("@feathersjs/feathers").Hook;
export declare const joiOptions: {
    errors: {
        wrap: {
            label: string;
        };
    };
    convert: boolean;
    abortEarly: boolean;
};
export declare const joiReadOptions: {
    getContext(context: {
        params: {
            query: any;
        };
    }): any;
    setContext(context: {
        params: {
            query: any;
        };
    }, newValues: any): void;
    convert: boolean;
    abortEarly: boolean;
};
