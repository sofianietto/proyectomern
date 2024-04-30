import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <section className='home'>
            <div className="setContainer contanier">
                <div className="homeText">
                    <h1 className="tittle">
                        Reserva una habitacion con hotel Trivago
                    </h1>
                    <p className="subTittle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <button className="btn">
                        <a href="#">Ver habitaciones</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home