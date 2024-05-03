import ListaClientes from "../componentes/ListaClientes"
import AñadirClientes from "../componentes/AñadirCliente"

const Clientes = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-6">
                        <ListaClientes />
                    </div>
                    <div className="col-6">
                        <AñadirClientes />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clientes
