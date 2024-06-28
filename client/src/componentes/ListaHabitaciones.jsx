import useAxios from "../hooks/useAxios"
import EliminarHabitacion from "./EliminarHabitacion"
import Swal from 'sweetalert2'
import Modal from "./Modal"

const ListaHabitaciones = () => {

    const {data, isLoading, error, setData} = useAxios('http://localhost:8000/api/habitacion')
    if(error){
        return <div>{error.message}</div>
    }

    if(isLoading){
        return <div>Loading...</div>
    }

    const successEliminar = (habitacionId) => {
        console.log(habitacionId)
        Swal.fire({
            icon: "success",
            title: "Eliminado",
            text: "eliminaste una habitacion",
        });
        navegate("/recepcion")
    }


    return (
        <div>
            <h1>Lista de Habitaciones</h1>
            <table className="mt-4 table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Tipo</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((habitacion) => (
                        <tr key={habitacion._id}>
                            <td>{habitacion.numero}</td>
                            <td>{habitacion.tipo}</td>
                            <td>{habitacion.descripcion}</td>
                            <td>
                            <EliminarHabitacion habitacionId={habitacion._id} successCallback={successEliminar} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        
    )
}

export default ListaHabitaciones
