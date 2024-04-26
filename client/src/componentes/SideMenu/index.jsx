import { Menu } from "antd";
import { AppstoreOutlined, TeamOutlined,HomeOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function SideMenu() {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");

    useEffect(() => {
        const pathName = location.pathname;
        setSelectedKeys(pathName);
    }, [location.pathname]);

    const navigate = useNavigate();


    
        return (
            <div className="SideMenu">
                <Menu
                    className="SideMenuVertical"
                    mode="vertical"
                    onClick={(item) => {
                        //item.key
                        navigate(item.key);
                    }}
                    selectedKeys={[selectedKeys]}
                    items={[
                        {
                            label: "Recepcion",
                            icon: <HomeOutlined />,
                            key: "/",
                        },
                        {
                            label: "Reservas",
                            icon: <AppstoreOutlined />,
                            key: "/addreserva",
                        },
                        {
                            label: "Clientes",
                            icon: <TeamOutlined />,
                            key: "/addcliente",
                        },
                        {
                            label: "Habitaciones",
                            icon: <AppstoreOutlined />,
                            key: "/addhabitacion",
                        }
                    ]}
                >
                    
                </Menu>
            </div>
        )
    }

    export default SideMenu
