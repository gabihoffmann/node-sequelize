const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UsersController");
const AddressController = require("./controllers/AddressController");

routes.get("/users", UserController.list);
routes.post("/users", UserController.store);

routes.get("/addresses", AddressController.list);
routes.post("/users/:user_id/addresses", AddressController.store);

module.exports = routes;
