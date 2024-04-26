const Reserva = require("../models/reserva.model");


module.exports = {
    createNewReserva: (req, res) => {
        Reserva.create(req.body)
            .then((newlyCreatedReserva) => res.status(201).json({ Reserva: newlyCreatedReserva }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },

    getAllReserva: (req, res) => {
        Reserva.find()
            .then((allReserva) => res.status(200).json(allReserva))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },

    getOneReservaById: (req, res) => {
        Reserva.findOne({ _id: req.params.id })
            .then((oneSingleReserva) => res.status(200).json({ Reserva: oneSingleReserva }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },

    deleteOneReservaById: (req, res) => {
        Reserva.deleteOne({ _id: req.params.id })
            .then((result) => res.status(200).json({ result: result }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    }
}
