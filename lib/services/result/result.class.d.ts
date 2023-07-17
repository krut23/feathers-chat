import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Result, ResultData, ResultPatch, ResultQuery } from './result.schema';
export type { Result, ResultData, ResultPatch, ResultQuery };
export interface ResultParams extends KnexAdapterParams<ResultQuery> {
}
export declare class ResultService<ServiceParams extends Params = ResultParams> extends KnexService<Result, ResultData, ResultParams, ResultPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
