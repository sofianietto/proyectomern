import React from 'react'
import './About.css'
import { MdKingBed, MdBathtub } from 'react-icons/md'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import img1 from '../../assets/1.jpeg'
import img2 from '../../assets/2.jpeg'
import img3 from '../../assets/3.jpeg'

const Abouts = [
    {
        id: 1,
        imgSrc: img1,
        desTittle: 'Machu Pichu',
        habitacion: 'Single/Matrimonial',
        price: 'Gs 180.000',
        camas: '1 cama'
    },

    {
        id: 2,
        imgSrc: img2,
        desTittle: 'Asuncion',
        habitacion: 'Doble',
        price: 'Gs 300.000',
        camas: '2 camas'
    },

    {
        id: 3,
        imgSrc: img3,
        desTittle: 'Buenos aires',
        habitacion: 'Triple',
        price: 'Gs 420.000',
        camas: '3 camas'
    }

]

const About = () => {
    return (
        <section className='offer container section'>
            <div className="setContainer">
                <div className="secIntro">
                    <h2 className="secTittle">
                        Habitaciones disponibles
                    </h2>
                    <p>
                        Estos son los tipos de habitaciones que tenemos disponible en el hotel.
                    </p>
                </div>

                <div className="mainContent grid">
                    {
                        Abouts.map(({ id, imgSrc, desTittle, habitacion, price, camas }) => {
                            return (
                                <div className="singleOffer">
                                    <div className="destImage">
                                        <img src={imgSrc} alt="Image name" />
                                    </div>
                                    <div className="offerBody">
                                        <div className="price flex">
                                            <h4>
                                                {price}
                                            </h4>
                                            <span className="status">
                                                Disponibles
                                            </span>
                                        </div>

                                        <div className="amenities flex">
                                            <div className="singleAmenity flex">
                                                <MdKingBed className="icon" />
                                                <small>{camas}</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdBathtub className="icon" />
                                                <small>1 baño</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <FaWifi className="icon" />
                                                <small>Wi-Fi</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <CgSmartHomeRefrigerator className="icon" />
                                                <small>minibar</small>
                                            </div>
                                        </div>

                                        <div className="location flex">
                                            <small>Habitacion {habitacion}</small>
                                        </div>

                                        <button className='btn flex'>
                                            View Details
                                            <BsArrowRightShort className="icon" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default About
