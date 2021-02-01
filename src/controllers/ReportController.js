const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    //encontrar todos os usuários que tem email terminando com @rocketseat.com.br
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.like]: "%@rocketseat.com.br",
        },
      },
    });

    return res.json(users);

    //desses usuários buscar os que moram na rua "Rua Guilherme Gembala"
    //desse usuários buscas os que tem tecnologia que começa com React
  },
};
