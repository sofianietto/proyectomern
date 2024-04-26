const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"]
    },
    apellido: {
        type: String,
        required: [true, "El apellido es requerido"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "El correo es requerido"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Por favor ingrese un correo valido"
        }
    },
    contraseña: {
        type: String,
        required: [true, "La contraseña es requerida"],
        minlength: [8, "La contraseña debe tener al menos 8 caracteres"]
    }
}, { timestamps: true });

UserSchema.virtual('confirmarcontraseña')
    .get(() => this._confirmarcontraseña)
    .set(value => this._confirmarcontraseña = value);

UserSchema.pre('validate', function (next) {
    if (this.contraseña !== this.confirmarcontraseña) {
        this.invalidate('confirmarcontraseña', 'Las contraseñas no coinciden');
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.contraseña, 10)
        .then(hash => {
            this.contraseña = hash;
            next();
        });
});

UserSchema.plugin(uniqueValidator, { message: "El correo ya está en uso" });

module.exports.UserModel = mongoose.model('User', UserSchema)