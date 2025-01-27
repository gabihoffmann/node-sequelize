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
        //desse usuários buscas as tecnologias que começam com React
        {
          association: "techs",
          required: false,
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
