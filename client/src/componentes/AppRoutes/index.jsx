import { Route, Routes } from "react-router-dom"
import AñadirCliente from "../../views/clientes/AñadirCliente"
import AñadirReserva from "../../views/reservas/AñadirReserva"
import AñadirHabitacion from "../../views/habitaciones/AñadirHabitacion"
import ListaHabitaciones from "../../views/habitaciones/ListaHabitaciones"
import Recepcion from "../../views/recepcion/Recepcion"
import ListaReserva from "../../views/reservas/ListarReserva"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/addcliente" element={<AñadirCliente />} />
            <Route path="/addreserva" element={<AñadirReserva />} />
            <Route path="/addhabitacion" element={<AñadirHabitacion />} />
            <Route path="/listahabitaciones" element={<ListaHabitaciones />} />
            <Route path="/listareserva" element={<ListaReserva />} />
            <Route path="/recepcion" element={<Recepcion />} />
        </Routes>)
}

export default AppRoutes
