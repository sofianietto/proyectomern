import useAxios from "../hooks/useAxios"

const ListaReserva = () => {

    const {data, isLoading, error, setData} = useAxios('http://localhost:8000/api/reserva', { withCredentials: true })
    if(error){
        return <div>{error.message}</div>
    }

    if(isLoading){
        return <div>Loading...</div>
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
                    </tr>
                </thead>
                <tbody>
                    {data.map((reserva) => (
                        <tr key={reserva._id}>
                            <td>{reserva.nombre}</td>
                            <td>{reserva.apellido}</td>
                            <td>{reserva.fechaInicio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListaReserva
