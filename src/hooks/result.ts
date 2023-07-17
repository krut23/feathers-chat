// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const result = async (context: HookContext) => {
  console.log(`Running hook result on ${context.path}.${context.method}`)
}
