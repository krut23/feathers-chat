// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import { resultValidation } from './result.joi'

// Main data model schema
export const resultSchema = {
  $id: 'Result',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'text'],
  properties: {
    id: { type: 'number' },

    text: { type: 'string' }
  }
} as const
export type Result = FromSchema<typeof resultSchema>
export const resultValidator = getValidator(resultSchema, dataValidator)
export const resultResolver = resolve<Result, HookContext>({})

export const resultExternalResolver = resolve<Result, HookContext>({})

// Schema for creating new data
export const resultDataSchema = {
  $id: 'ResultData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...resultSchema.properties
  }
} as const
export type ResultData = FromSchema<typeof resultDataSchema>
export const resultDataValidator = resultValidation
export const resultDataResolver = resolve<ResultData, HookContext>({})

// Schema for updating existing data
export const resultPatchSchema = {
  $id: 'ResultPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...resultSchema.properties
  }
} as const
export type ResultPatch = FromSchema<typeof resultPatchSchema>
export const resultPatchValidator = resultValidation
export const resultPatchResolver = resolve<ResultPatch, HookContext>({})

// Schema for allowed query properties
export const resultQuerySchema = {
  $id: 'ResultQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(resultSchema.properties)
  }
} as const
export type ResultQuery = FromSchema<typeof resultQuerySchema>
export const resultQueryValidator = resultValidation
export const resultQueryResolver = resolve<ResultQuery, HookContext>({})
