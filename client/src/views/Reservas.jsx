import AñadirReserva from "../componentes/AñadirReserva"
import ListaReserva from "../componentes/ListarReserva"

const Reservas = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-6">
                        <ListaReserva />
                    </div>
                    <div className="col-6">
                        <AñadirReserva />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservas
