import ListaClientes from "../componentes/ListaClientes"
import AñadirClientes from "../componentes/AñadirCliente"
import { Fragment } from "react"

const Clientes = () => {
    return (
        <>
        <Fragment>
            <div className="container mt-3">
                <ListaClientes />
                <button className="btn btn-primary">Añadir Cliente</button>
            </div>
         
        </Fragment>
        </>
    )
}

export default Clientes
