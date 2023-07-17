import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Result, ResultData, ResultPatch, ResultQuery, ResultService } from './result.class';
export type { Result, ResultData, ResultPatch, ResultQuery };
export type ResultClientService = Pick<ResultService<Params<ResultQuery>>, (typeof resultMethods)[number]>;
export declare const resultPath = "result";
export declare const resultMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const resultClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [resultPath]: ResultClientService;
    }
}
