import useAxios from "../hooks/useAxios"

const ListaHabitaciones = () => {

    const {data, isLoading, error, setData} = useAxios('http://localhost:8000/api/cliente')
    if(error){
        return <div>{error.message}</div>
    }

    if(isLoading){
        return <div>Loading...</div>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListaHabitaciones
