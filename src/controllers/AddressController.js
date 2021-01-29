const Address = require("../models/Address");
const User = require("../models/User");
const { use } = require("../routes");

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const address = await Address.create({ zipcode, street, number, user_id });

    return res.json(address);
  },

  async list(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const addresses = await Address.findAll({ where: { user_id } });

    return res.json(addresses);
  },
};
