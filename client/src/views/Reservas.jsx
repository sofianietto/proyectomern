import { Fragment } from "react"
import AñadirReserva from "../componentes/AñadirReserva"
import ListaReserva from "../componentes/ListarReserva"

const Reservas = () => {
    return (
        <>
        <Fragment>
            <div className="container mt-3">
                <ListaReserva />
                <button className="btn btn-primary">Añadir Reserva</button>
            </div>

        </Fragment>
        </>
    )
}

export default Reservas
