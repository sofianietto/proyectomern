import React, { useState } from 'react'
import './NavBar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots} from 'react-icons/tb'


const NavBar = () => {
// para mostrar el navegador a
    const [active, setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavBar')
    }

// para cerrar el navegador
    const removeNav = () => {
        setActive('navBar')
    }


    return (
        <section className='navBarSection'>
            <div className="header">
                <div className="logoDiv">
                    <a href="#" className="logo">
                        <h1 className='flex'><MdOutlineTravelExplore className='icon' />
                            Trivago</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navList flex">
                        <li className="navItem">
                            <a href="#" className="navlink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navlink">Products</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navlink">Resources</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navlink">Contact</a>
                        </li>

                        <div className="headerBtns flex">
                            <button className='btn loginBtn'>
                                <a href="#">Login</a>
                            </button>
                            <button className='btn loginBtn'>
                                <a href="#">Registrarse</a>
                            </button>
                        </div>
                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className='icon'/>
                </div>
            </div>
        </section>
    )
}

export default NavBar