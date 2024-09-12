import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Busqueda from "../components/busqueda";
function Home(){
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`${API_URL}/api/protected`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data.authenticated)
                setUser(data.authenticated);
            } else {
                setUser(null);
            }
        };

        fetchUser();
    }, [API_URL]);
    async function cerrarSesion() {
        try {
            await fetch(`${API_URL}/logout`, {
                method: 'POST',
                credentials: 'include',
            });
            setUser(null);
            navigate("/login");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    }
    return (
        <div className="home">
            <header className="w-full flex shadow-md mb-4 h-[55px] items-center">
                <div className="container m-auto h-full px-4">
                    <div className="flex justify-between items-center h-full">
                        <div className="cursor-pointer h-full flex items-center gap-[6px]">
                            <img className="h-full py-3" src="/logo.png" alt="logofasty"/>
                            <p className="text-[18px]">Fasty</p>
                        </div>
                        <nav>
                            <div>
                                <ul className="flex gap-[30px] text-[18px] content-center">
                                    <li><a href="" className="border-b-[2px] border-[transparent] hover:border-comp pb-[2px]">inicio</a></li>
                                    <li><a href="" className="border-b-[2px] border-[transparent] hover:border-comp pb-[2px]">Tienda</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="flex gap-[6px] text-[25px] h-full items-center">

                            <div className="icons text-[25px] flex gap-[10px] items-center z-[1]">
                                <Busqueda />
                            </div>

                            <li className="relative w-[max-content] h-full flex justify-center items-center content-center group">
                                <i className='bx bx-user hover:text-comp cursor-pointer'></i>
                                <div className="dropdown-menu absolute top-full transform h-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 group-hover:rounded-b-[4px]">
                                    <div className="content-dropdown pointer-events-none group-hover:pointer-events-auto py-[10px] px-[5px] w-[max-content] min-w-[150px] bg-white shadow-lg flex h-[max-content] gap-[40px] rounded-b-[2px]">
                                        <ul className="text-[17px] text-center w-full">
                                            <li className="my-1 mx-[0.5px] p-1 rounded-[20px] hover:bg-comp hover:text-principal"><a href="#" className="transition-none">Mi cuenta</a></li>
                                            <li className="my-1 mx-[0.5px] p-1 rounded-[20px] hover:bg-comp hover:text-principal"><a href="#" className="transition-none">Mis pedidos</a></li>
                                            {!user && (<li className="my-1 mx-[0.5px] p-1 rounded-[20px] hover:bg-comp hover:text-principal"><Link to="login" className="transition-none">Iniciar Sesión</Link></li>)}
                                            {user && (<li className="my-1 mx-[0.5px] p-1 rounded-[20px] hover:bg-comp hover:text-principal"><button onClick={cerrarSesion} className="transition-none">Cerrar sesión</button></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <i className='bx bx-cart hover:text-comp cursor-pointer'></i>
                        </div>
                    </div>
                </div>
            </header>
            <main className="w-full">
                <div className="container m-auto" >
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Home;