import { Model, DataTypes, INTEGER } from 'sequelize'
import sequelize from '../sequelize'
import {User} from './users.model'

class Result extends Model {
  public id!: number
  public student_id!: number
  public subject!: string
  public marks!: number
}

Result.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marks: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'result',
    sequelize,
    timestamps: false
  }
)

Result.belongsTo(User, { foreignKey: 'student_id' })
User.hasMany(Result, { foreignKey: 'student_id' })

export  {Result}
