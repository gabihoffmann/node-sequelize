const { database, DataTypes } = require("../database/index");
const User = require("./User");

const Tech = database.define(
  "Techs",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {}
);

Tech.associate = (models) => {
  Tech.belongsToMany(models.User, {
    foreignKey: "tech_id",
    through: "user_techs",
    as: "users",
  });
};

module.exports = Tech;
