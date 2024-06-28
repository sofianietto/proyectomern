const express = require("express");

const HabitacionController = require("../controllers/habitacion.controller");
const HabitacionRouter = express.Router();


//api/HabitacionS/
HabitacionRouter.post("/", HabitacionController.createNewHabitacion);
HabitacionRouter.get("/", HabitacionController.getAllHabitacion);
HabitacionRouter.get("/:id", HabitacionController.getOneHabitacionById);
HabitacionRouter.delete("/:id", HabitacionController.deleteOneHabitacionById);



module.exports = HabitacionRouter;