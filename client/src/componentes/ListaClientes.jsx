import useAxios from "../hooks/useAxios"
import Swal from 'sweetalert2'
import EliminarCliente from "./EliminarCliente"
import { useNavigate } from "react-router-dom";

const ListaClientes = () => {

    const {data, isLoading, error, setData} = useAxios('http://localhost:8000/api/cliente')
    if(error){
        return <div>{error.message}</div>
    }

    if(isLoading){
        return <div>Loading...</div>
    }

    const successEliminar = (clienteId) => {
        console.log(clienteId)
        Swal.fire({
            icon: "success",
            title: "Eliminado",
            text: "eliminaste un cliente",
        });
        useNavigate("/recepcion")
    }

    return (
        <div>
            <h1>Lista de Clientes</h1>
            <table className="mt-4 table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>C.I</th>
                        <th>Empresa</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((cliente) => (
                        <tr key={cliente._id}>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.ci}</td>
                            <td>{cliente.empresa}</td>
                            <td>{cliente.email}</td>
                            <td> <EliminarCliente clienteId={cliente._id} successCallback={successEliminar} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListaClientes
