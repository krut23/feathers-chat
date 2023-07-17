import Joi from 'joi'
import validate from 'feathers-validate-joi'
import { HookContext } from '@feathersjs/feathers'


const student_id= Joi.number().required()
const subject= Joi.string().required()
const marks= Joi.number().min(0).max(100).required()
const search = Joi.string().trim().allow('').default('').label('Search text')
const limit = Joi.number().label('Limit')
const skip = Joi.number().label('Skip')

export const resultSchema = Joi.object().keys({
  student_id,
  subject,
  marks
})

export const getResultSchema = Joi.object().keys({
search,
limit,
skip
})


export const resultValidation = validate.form(resultSchema)

export const joiOptions = {
  errors: {
    wrap: {
      label: ''
    }
  },
  convert: true,
  abortEarly: false
}

export const joiReadOptions = {
  getContext(context: { params: { query: any } }) {
    return context.params.query
  },
  setContext(context: { params: { query: any } }, newValues: any) {
    Object.assign(context.params.query, newValues)
  },

  convert: true,
  abortEarly: false
}
