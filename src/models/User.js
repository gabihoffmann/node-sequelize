const { database, DataTypes } = require("../database/index");

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

module.exports = User;
