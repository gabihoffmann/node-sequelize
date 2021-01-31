const { database, DataTypes } = require("../database/index");

const Tech = database.define(
  "techs",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

Tech.associate = (models) => {
  //"Tech pertence a muitos User"
  Tech.belongsToMany(models.User, {
    foreignKey: "tech_id", // nome da chave em 'user_techs' que armazena a tech
    through: "user_techs", // através da tabela pivô 'user_techs'
    as: "users", // chama esse relacionamento como users (os usuários que tem essa tecnologia)
  });
};

module.exports = Tech;
