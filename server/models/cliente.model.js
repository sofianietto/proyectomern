const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema para Cliente
const ClienteSchema = new Schema({
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
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },

    empresa:{
        type: String,
    }

    // Otros campos según tus necesidades
});

module.exports = mongoose.model('Cliente', ClienteSchema)