const express = require("express");

const HabitacionController = require("../controllers/habitacion.controller");
const HabitacionRouter = express.Router();
const { authenticate } = require("../config/jwt.config");

//api/HabitacionS/
HabitacionRouter.post("/", HabitacionController.createNewHabitacion);
HabitacionRouter.get("/", HabitacionController.getAllHabitacion);
HabitacionRouter.get("/:id", HabitacionController.getOneHabitacionById);




module.exports = HabitacionRouter;