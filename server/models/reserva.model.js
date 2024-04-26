const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es requerido']
    },
    ci: {
        type: Number,
        required: [true, 'El CI es requerido'],
        unique: [true, 'El CI ya existe']
    },

    email: {
        type: String,
    },

    empresa:{
        type: String,
    },

    precio:{
        type: Number,
        required: [true, 'El precio es requerido'],
    },

    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    },
    // Otros campos según tus necesidades
});


module.exports = mongoose.model('Reserva', ReservaSchema)