// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Result, ResultData, ResultPatch, ResultQuery, ResultService } from './result.class'

export type { Result, ResultData, ResultPatch, ResultQuery }

export type ResultClientService = Pick<ResultService<Params<ResultQuery>>, (typeof resultMethods)[number]>

export const resultPath = 'result'

export const resultMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const resultClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(resultPath, connection.service(resultPath), {
    methods: resultMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [resultPath]: ResultClientService
  }
}
