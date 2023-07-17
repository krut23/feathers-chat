import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import { getResultSchema, resultSchema, joiReadOptions, joiOptions } from './result.joi'
import validate from 'feathers-validate-joi'
import {HooksObject} from '@feathersjs/feathers'
import {
  resultResolver,
  resultExternalResolver,
  resultDataResolver,
  resultPatchResolver
} from './result.schema'

export default {
  around: {
    all: [
      authenticate('jwt'),
      schemaHooks.resolveExternal(resultExternalResolver),
      schemaHooks.resolveResult(resultResolver)
    ]
  },
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [validate.form(getResultSchema, joiReadOptions)],
    create: [validate.form(resultSchema, joiOptions), schemaHooks.resolveData(resultDataResolver) as any],
    patch: [validate.form(resultSchema, joiOptions), schemaHooks.resolveData(resultPatchResolver) as any],
    remove: []
  },
  after: {
    all: []
  },
  error: {
    all: []
  }
} as HooksObject;
