const express = require("express");
const routes = express.Router();

const AddressController = require("./controllers/AddressController");
const ReportController = require("./controllers/ReportController");
const TechController = require("./controllers/TechController");
const UserController = require("./controllers/UsersController");

routes.get("/users", UserController.list);
routes.post("/users", UserController.store);

routes.get("/users/:user_id/addresses", AddressController.list);
routes.post("/users/:user_id/addresses", AddressController.store);

routes.get("/users/:user_id/techs", TechController.list);
routes.post("/users/:user_id/techs", TechController.store);
routes.delete("/users/:user_id/techs", TechController.delete);

routes.get("/report", ReportController.show);

module.exports = routes;
