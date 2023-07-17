import { Model } from 'sequelize';
declare class Result extends Model {
    id: number;
    student_id: number;
    subject: string;
    marks: number;
}
export { Result };
