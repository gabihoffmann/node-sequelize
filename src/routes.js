const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UsersController");

routes.get("/users", UserController.list);
routes.post("/users", UserController.store);

module.exports = routes;
