import { Model, DataTypes } from 'sequelize'
import sequelize from '../sequelize'
import { Result } from '../models/result.model'

class User extends Model {
  public id!: number
  public email!: string
  public password!: string


}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    tableName: 'users',
    sequelize,
    timestamps: false
  }
)

export  {User}
