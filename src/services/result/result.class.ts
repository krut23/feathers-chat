// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Result, ResultData, ResultPatch, ResultQuery } from './result.schema'

export type { Result, ResultData, ResultPatch, ResultQuery }

export interface ResultParams extends KnexAdapterParams<ResultQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ResultService<ServiceParams extends Params = ResultParams> extends KnexService<
  Result,
  ResultData,
  ResultParams,
  ResultPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'result'
  }
}
