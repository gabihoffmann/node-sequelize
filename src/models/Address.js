const { database, DataTypes } = require("../database/index");

const Address = database.define(
  "addresses",
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  { freezeTableName: true }
);

Address.associate = (models) => {
  Address.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
};

module.exports = Address;
