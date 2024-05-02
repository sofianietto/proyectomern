const express = require("express");

const ClienteController = require("../controllers/cliente.controller");
const ClienteRouter = express.Router();
const { authenticate } = require("../config/jwt.config");

//api/ClienteS/
ClienteRouter.post("/", ClienteController.createNewCliente);
ClienteRouter.get("/", ClienteController.getAllCliente);
ClienteRouter.get("/:id", ClienteController.getOneClienteById);




module.exports = ClienteRouter;