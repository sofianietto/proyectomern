const express = require("express");

const ReservaController = require("../controllers/reserva.controller");
const ReservaRouter = express.Router();


//api/RESERVAS/
ReservaRouter.post("/", ReservaController.createNewReserva);
ReservaRouter.get("/", ReservaController.getAllReserva);
ReservaRouter.get("/:id", ReservaController.getOneReservaById);
ReservaRouter.delete("/:id", ReservaController.deleteOneReservaById);
ReservaRouter.delete("/:id", ReservaController.deleteOneReservaById);




module.exports = ReservaRouter;