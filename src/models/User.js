const { database, DataTypes } = require("../database/index");
const Address = require("./Address");
const Tech = require("./Tech");

const User = database.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

User.hasMany(Address, { foreignKey: "user_id", as: "addresses" });
User.belongsToMany(Tech, {
  foreignKey: "user_id",
  through: "user_techs",
  as: "techs",
});

// User.associate = (models) => {
//   User.belongsToMany(models.Tech, {
//     foreignKey: "user_id",
//     through: "user_techs",
//     as: "techs",
//   });
// };

module.exports = User;
