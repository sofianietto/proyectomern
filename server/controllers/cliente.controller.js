const Cliente = require("../models/cliente.model");

module.exports = {

    createNewCliente: (req, res) => {
        Cliente.create(req.body)
            .then((newlyCreatedCliente) => res.status(201).json({ Cliente: newlyCreatedCliente }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },

    getAllCliente: (req, res) => {
        Cliente.find()
            .then((allCliente) => res.status(200).json(allCliente))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },

    getOneClienteById: (req, res) => {
        Cliente.findOne({ _id: req.params.id })
            .then((oneSingleCliente) => res.status(200).json({ Cliente: oneSingleCliente }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    deleteOneClienteById: (req, res) => {
        Cliente.deleteOne({ _id: req.params.id })
            .then((result) => res.status(200).json({ result: result }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
}