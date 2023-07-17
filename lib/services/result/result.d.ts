import type { Application } from '../../declarations';
import { ResultService } from './result.class';
import { resultPath } from './result.shared';
export * from './result.class';
export * from './result.schema';
export declare const result: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [resultPath]: ResultService;
    }
}
