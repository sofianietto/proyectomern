import { Menu } from 'antd'
import {
    HomeOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
    PayCircleOutlined,
    TeamOutlined
} from '@ant-design/icons'
import { NavLink } from "react-router-dom"
const MenuList = () => {
    return (
        <Menu theme="dark" className='menu-bar'>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <NavLink to="/">Recepcion</NavLink>
            </Menu.Item>

            <Menu.SubMenu key="subtask" icon={<AppstoreOutlined />} title="Reservas">
                <Menu.Item key='reservas-1'>
                    <NavLink to="/addreserva">Añadir</NavLink>
                </Menu.Item>
                <Menu.Item key='reservas-2'>
                    Buscar
                </Menu.Item>
                <Menu.Item key='reservas-3'>
                <NavLink to="/listareserva">Lista</NavLink>
                </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="subtask-2" icon={<TeamOutlined />} title="Clientes">
                <Menu.Item key='clientes-1'>
                    <NavLink to="/addcliente">Añadir</NavLink>
                </Menu.Item>
                <Menu.Item key='clientes-2'>
                    Buscar
                </Menu.Item>
                <Menu.Item key='clientes-3'>
                    Eliminar
                </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="subtask-3" icon={<AppstoreOutlined />} title="Habitaciones">
                <Menu.Item key='Habitaciones-1'>
                    <NavLink to="/addhabitacion">Añadir</NavLink>
                </Menu.Item>
                <Menu.Item key='Habitaciones-2'>
                    <NavLink to="/listahabitaciones">Lista</NavLink>
                </Menu.Item>
                <Menu.Item key='Habitaciones-3'>
                    Eliminar
                </Menu.Item>
            </Menu.SubMenu>

        </Menu>
    )
}

export default MenuList
