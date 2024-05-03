import { NavLink } from "react-router-dom";
import useAxios from "../hooks/useAxios"
import { LuBedDouble } from "react-icons/lu";
import "../css/recepcion.css"

const Recepcion = () => {

    const { data, isLoading, error, setData } = useAxios('http://localhost:8000/api/habitacion')
    if (error) {
        return <div>{error.message}</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <h3>Entrada de hospedamiento</h3>
            <hr />
            <div className="flex">
                {data.map((habitacion) => (
                    <div className="flex">
                        <div className="container">
                            <div className="card">
                                <div className="card-body">
                                    <div className="flex">
                                        <div className="logo-recepcion">
                                            <LuBedDouble />
                                        </div>
                                        <div className="aja">
                                            <h5 className="card-title">{habitacion.numero}</h5>
                                            <p className="card-text">{habitacion.tipo}</p>
                                        </div>
                                    </div>
                                    <div className="boton">
                                        <NavLink to="/reservas" className="btn btn-primary">Reservar</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recepcion
