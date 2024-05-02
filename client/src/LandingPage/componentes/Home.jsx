import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <section className='home'>
            <div className="setContainer container">
                <div className="homeText">
                    <h1 className="tittle">
                        Hotel Flor de Loto
                    </h1>
                    <p className="subTittle">
                        Reserva una habitacion dando click en el boton
                    </p>
                    <NavLink to="/añadirreservas" className='boton text-decoration-none'>
                        Reservar
                    </NavLink>
                </div>


            </div>
        </section>
    )
}

export default Home