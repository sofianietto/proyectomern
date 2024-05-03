import { NavLink, Outlet } from 'react-router-dom'
import '../css/navbar.css'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand me-auto" href="#">Flor de Loto</a>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Flor de Loto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink to="/recepcion" className="nav-link mx-lg-2 active" aria-current="page" href="#">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/reservas" className="nav-link" href="#">Reservas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/clientes" className="nav-link" href="#">Clientes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/habitaciones" className="nav-link mx-lg-2" href="#">Habitaciones</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="#" className="login-button">Log Out</a>
                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div className='contenido'>
            <Outlet />
            </div>
        </>
    )
}

export default NavBar
