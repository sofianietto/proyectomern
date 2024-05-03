import { useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'
import { Navigate, useNavigate } from "react-router-dom"

const AñadirHabitacion = () => {
    const navegate = useNavigate()
    const initialValues = {
        numero: '',
        tipo: '',
        descripcion: '',
    }
    console.log(initialValues)

    const { values: Habitacion, handleChange } = useForm(initialValues)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/habitacion', Habitacion)
            .then(res => {
                console.log(res.data.Habitacion)
                navegate("/recepcion")
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Agregaste una Habitacion!!",
                });
                setError("")
                Navigate("/habitaciones")
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error.message)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <h1>Habitaciones</h1>
            <hr/>
                <div className="row">
                    <div className="col-6">
                        <div className="text-danger">{error}</div>
                        <div>
                            <label className="mt-3">Numero de Habitacion: </label>
                            <input type="number" className="form-control" name="numero" value={Habitacion.numero} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">Tipo de Habitacion: </label>
                            <input type="text" className="form-control" name="tipo" value={Habitacion.tipo} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <label className="mt-3">Descripcion de la habitacion (opcional): </label>
                            <input type="text" className="form-control" name="descripcion" value={Habitacion.descripcion} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Añadir Habitacion</button>
            </form>
        </>
    )
}

export default AñadirHabitacion