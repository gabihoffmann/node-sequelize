const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UsersController");
const AddressController = require("./controllers/AddressController");
const TechController = require("./controllers/TechController");

routes.get("/users", UserController.list);
routes.post("/users", UserController.store);

routes.get("/users/:user_id/addresses", AddressController.list);
routes.post("/users/:user_id/addresses", AddressController.store);

routes.get("/users/:user_id/techs", TechController.list);
routes.post("/users/:user_id/techs", TechController.store);
routes.delete("/users/:user_id/techs", TechController.delete);

module.exports = routes;
