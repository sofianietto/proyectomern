import { useState } from "react"
import useForm from "../../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"

const AñadirReserva = () => {
    const navegate = useNavigate()
    const initialValues = {
        nombre: '',
        apellido: '',
        ci: '',
        email: '',
        empresa: '',
        fechaInicio: '',
        precio: '',
        fechaFin: '',
    }
    console.log(initialValues)

    const { values: Reserva, handleChange } = useForm(initialValues)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/reserva', Reserva)
            .then(res => {
                console.log(res.data.Reserva)
                navegate("/recepcion")
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Agregaste una Reserva!!",
                });
                setError("")
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error.message)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Reservas</h1>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <h3>Datos del cliente</h3>
                        <hr />
                        <div className="text-danger">{error}</div>
                        <div>
                            <label className="mt-3">Nombre: </label>
                            <input type="text" className="form-control" name="nombre" value={Reserva.nombre} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">Apellido: </label>
                            <input type="text" className="form-control" name="apellido" value={Reserva.apellido} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">CI: </label>
                            <input type="number" className="form-control" name="ci" value={Reserva.ci} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">Correo del cliente (opcional): </label>
                            <input type="text" className="form-control" name="email" value={Reserva.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">Empresa (opcional): </label>
                            <input type="text" className="form-control" name="empresa" value={Reserva.empresa} onChange={handleChange} />
                        </div>
                        <div />
                    </div>
                    <div className="col-6">
                        <h3>Datos de hospedaje</h3>
                        <hr />
                        <div className="text-danger">{error}</div>
                        <div>
                            <label className="mt-3">Fecha de Incio: </label>
                            <input type="date" className="form-control" name="fechaInicio" value={Reserva.fechaInicio} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">Fecha Fin:  </label>
                            <input type="date" className="form-control" name="fechaFin" value={Reserva.fechaFin} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">Precio del hospedaje:  </label>
                            <input type="number" className="form-control" name="precio" value={Reserva.precio} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Añadir Reserva</button>
            </form>
        </>
    )
}

export default AñadirReserva