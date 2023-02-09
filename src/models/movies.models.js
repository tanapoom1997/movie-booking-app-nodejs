const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db-conection");

class Movies extends Model {}
Movies.init(
  {
    movieId: {
      type: DataTypes.INTEGER,
      field: "movie_id",
      primaryKey: true
    },
    movieName: {
      type: DataTypes.STRING,
      field: "movie_name",
    },
    availableDate: {
      type: DataTypes.DATE,
      field: "available_date",
    },
  },
  {
    modelName: "movies",
    tableName: "movies",
    sequelize,
  }
);

module.exports = Movies;
