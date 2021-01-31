const { database, DataTypes } = require("../database/index");

const Tech = database.define(
  "Techs",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

Tech.associate = (models) => {
  Tech.belongsToMany(models.User, {
    foreignKey: "tech_id",
    through: "user_techs",
    as: "users",
  });
};

module.exports = Tech;
