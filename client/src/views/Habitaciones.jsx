import AñadirHabitacion from "../componentes/AñadirHabitacion"
import ListaHabitaciones from "../componentes/ListaHabitaciones"


const Habitaciones = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-6">
                        <ListaHabitaciones />
                    </div>
                    <div className="col-6">
                        <AñadirHabitacion />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Habitaciones
