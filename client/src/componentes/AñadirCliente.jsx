import { useState } from "react"
import  useForm  from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'
import { NavLink, useNavigate } from "react-router-dom"

const AñadirCliente = () => {
    const navegate = useNavigate()
    const initialValues = {
        nombre: '',
        apellido: '',
        CI: '',
        email: '',
        empresa: '',
    }
    console.log(initialValues)

    const { values: Cliente, handleChange } = useForm(initialValues)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/cliente', Cliente, { withCredentials: true })
            .then(res => {
                console.log(res.data.Cliente)
                navegate("/")
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Agregaste un Cliente!!",
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
                <h3>Añadir cliente</h3>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <div className="text-danger">{error}</div>
                        <div>
                            <label className="mt-3">Nombre del cliente: </label>
                            <input type="text" className="form-control" name="nombre" value={Cliente.nombre} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">Apellido del cliente: </label>
                            <input type="text" className="form-control" name="apellido" value={Cliente.apellido} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">CI: </label>
                            <input type="text" className="form-control" name="ci" value={Cliente.ci} onChange={handleChange} />
                        </div>
                        <div />
                    </div>
                    <div className="col-6">
                    <h3>Informacion Opcional</h3>
                    <div className="text-danger">{error}</div>
                        <div>
                            <label className="mt-3">Empresa: </label>
                            <input type="text" className="form-control" name="empresa" value={Cliente.empresa} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="mt-3">Correo del cliente:  </label>
                            <input type="text" className="form-control" name="email" value={Cliente.email} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Añadir Cliente</button>
            </form>
        </>
    )
}

export default AñadirCliente