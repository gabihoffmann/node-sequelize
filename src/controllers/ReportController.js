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
      include: [
        //desses usuários buscar os que moram na rua "Rua Guilherme Gembala"
        {
          association: "addresses",
          where: { street: "Rua Guilherme Gembala" },
        },
        //desse usuários buscas os que tem tecnologia que começa com React
        {
          association: "techs",
          where: {
            name: {
              [Op.like]: "React%",
            },
          },
        },
      ],
    });

    return res.json(users);
  },
};
