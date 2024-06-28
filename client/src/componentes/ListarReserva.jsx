import useAxios from "../hooks/useAxios"
import Swal from 'sweetalert2'
import EliminarReserva from "./EliminarReserva"

const ListaReserva = () => {

    const {data, isLoading, error, setData} = useAxios('http://localhost:8000/api/reserva')
    if(error){
        return <div>{error.message}</div>
    }

    if(isLoading){
        return <div>Loading...</div>
    }

    const successEliminar = (reservaId) => {
        console.log(reservaId)
        Swal.fire({
            icon: "success",
            title: "Eliminado",
            text: "eliminaste una reserva",
        });
        navegate("/recepcion")
    }

    return (
        <div>
            <h1>Lista de Reservas</h1>
            <table className="mt-4 table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>nombre</th>
                        <th>Apellido</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((reserva) => (
                        <tr key={reserva._id}>
                            <td>{reserva.nombre}</td>
                            <td>{reserva.apellido}</td>
                            <td>{reserva.fechaInicio}</td>
                            <td> <EliminarReserva reservaId={reserva._id} successCallback={successEliminar} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListaReserva
