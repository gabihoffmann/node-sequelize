const Tech = require("../models/Tech");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    //Criando uma tecnologia associada a um usuário
    //resposta do 'findOrCreate' array com a model e um boolean que informa se foi criado agora ou não
    const [tech] = await Tech.findOrCreate({
      // procurando uma tech com o name
      where: { name },
    });

    //Em um relacionamento (N:M) belongsToMany o Sequelize cria vários métodos auxiliares
    await user.addTech(tech);

    return res.json(tech);
  },

  async list(req, res) {
    return res.send("ok");
  },
};
