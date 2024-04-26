const Habitacion = require("../models/habitacion.model");

module.exports = {
    createNewHabitacion: (req, res) => {
        Habitacion.create(req.body)
            .then((newlyCreatedHabitacion) => res.status(201).json({ Habitacion: newlyCreatedHabitacion }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },

    getAllHabitacion: (req, res) => {
        Habitacion.find()
            .then((allHabitacion) => res.status(200).json(allHabitacion))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },

    getOneHabitacionById: (req, res) => {
        Habitacion.findOne({ _id: req.params.id })
            .then((oneSingleHabitacion) => res.status(200).json({ Habitacion: oneSingleHabitacion }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
}