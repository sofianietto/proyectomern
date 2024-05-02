const { UserModel } = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) => {
        const user = new UserModel(req.body);
        user
            .save()
            .then(() => {
                res.json({ msg: "success!", user: user });
            })
            .catch(err => res.json(err));
    },
    logout: (req, res) => {
        // clear the cookie from the response
        res.clearCookie("usertoken");
        res.status(200).json({
            message: "You have successfully logged out of our system",
        });
    },
    login: (req, res) => {
        UserModel.findOne({ email: req.body.email })
            .then(user => {
                if (user === null) {
                    res.status(400).json({ msg: "Login invalidado" });
                } else {
                    if (req.body.contraseña === undefined) {
                        res.status(400).json({ msg: "Login invalidado" });
                    }
                    console.log(req.body)
                    bcrypt
                        .compare(req.body.contraseña, user.contraseña)
                        .then(contraseñaIsValid => {
                            console.log("contraseñaIsValid: ", contraseñaIsValid);
                            if (contraseñaIsValid) {
                                const userInfo = {
                                    _id: user._id,
                                    nombre: user.nombre,
                                    apellido: user.apellido,
                                    email: user.email
                                };
                                console.log("userInfo: ", userInfo);

                                const secret = "mysecret";
                                const newJWT = jwt.sign(userInfo, secret)
                                console.log("newJWT: ", newJWT);
                                res
                                    .status(200)
                                    .cookie("usertoken", newJWT, {
                                        httpOnly: true,
                                        expires: new Date(Date.now() + 900000000),
                                    })
                                    .json({ msg: "exito!", user: userInfo, newJWT });
                            } else {
                                res.status(401).json({ msg: "Login invalidado" });
                            }
                        })
                        .catch(err => res.status(401).json({ msg: "Login invalidado", error: err }));
                }
            })
            .catch(err => res.status(401).json({ error: err }));
    }
}



