const { database, DataTypes } = require("../database/index");

const Address = database.define(
  "Address",
  {
    zipcode: {
      type: DataTypes.STRING,
    },
    street: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.INTEGER,
    },
  },
  {}
);

module.exports = Address;
