const { database, DataTypes } = require("../database/index");
const Address = require("./Address");

const User = database.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {}
);

User.hasMany(Address, { foreignKey: "user_id", as: "addresses" });

// User.associate = (models) => {
//   User.hasMany(models.Address, { foreignKey: "user_id", as: "addresses" });
// };

module.exports = User;
