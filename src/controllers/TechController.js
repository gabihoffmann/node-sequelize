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

    //resposta do findOrCreate array com a model e um boolean
    const [tech] = await Tech.findOrCreate({
      where: { name },
    });

    console.log(tech);

    res.send(tech);
  },

  async list(req, res) {
    return res.send("ok");
  },
};
