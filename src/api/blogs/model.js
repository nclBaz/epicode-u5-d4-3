import { DataTypes } from "sequelize"
import sequelize from "../../db.js"
import UsersModel from "../users/model.js"

const BlogsModel = sequelize.define("blog", {
  blogId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

// 1 to many relationship
UsersModel.hasMany(BlogsModel, { foreignKey: { allowNull: false } })
BlogsModel.belongsTo(UsersModel)

export default BlogsModel
