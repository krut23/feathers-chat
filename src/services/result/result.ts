// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import type { Application } from '../../declarations'
import { ResultService, getOptions } from './result.class'
import { resultPath, resultMethods } from './result.shared'
import hooks from './result.hooks'

export * from './result.class'
export * from './result.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const result = (app: Application) => {
  // Register our service on the Feathers application
  app.use(resultPath, new ResultService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: resultMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(resultPath).hooks(hooks)
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [resultPath]: ResultService
  }
}
