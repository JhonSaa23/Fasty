import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../core/services/login.service";


function Login() {
    const [error, setError] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const [loginCorreo, setLoginCorreo] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [registerNombre, setRegisterNombre] = useState("");
    const [registerApellido, setRegisterApellido] = useState("");
    const [registerCorreo, setRegisterCorreo] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (fadeOut) {
            const timer = setTimeout(() => {
                navigate("/");
            }, 1000); 

            return () => clearTimeout(timer);
        } 
    }, [fadeOut, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            await loginUser(loginCorreo, loginPassword);
            setFadeOut(true); 
        } catch (error) {
            setError("Error al iniciar sesión, verifica tus credenciales");
            console.log('Error pe caumsa ' + error);
        } finally {
            setIsLoading(false);
        }
        setFadeOut(true);
    };

    const registro = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const response = await registerUser(registerNombre, registerApellido, registerCorreo, registerPassword);
            if (response.ok) {
                setFadeOut(true); 
            } else {
                setError("Error en la respuesta del servidor");
            }
        } catch (error) {
            setError("Error al crear usuario");
            console.log('Error' + error);
        } finally {
            setIsLoading(false);
        }
    };

    const retornarHome = () => {
        navigate("/");
    };

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <div className={`h-screen flex items-center justify-center bg-principal ${fadeOut ? "fade-out" : "fade-in"}`}>

            <div className="relative w-full max-w-lg md:max-w-4xl h-[500px] md:h-[600px] bg-white rounded-lg shadow-xl overflow-hidden">
                <div className={`absolute inset-0 flex transition-transform duration-700 ease-in-out`}>
                    <div className="icon-return top-[18px] left-[1.45rem] absolute z-10">
                        <div onClick={retornarHome} className="return flex items-center pr-[12px] cursor-pointer">
                            <i className={`bx bx-chevron-left transition-[2s] text-[30px] ${isRegistering ? "text-white delay-[.45s]" : "text-comp"}`}></i>
                            <p className={`text-[16px] mb-[2px] transition-[2s] ${isRegistering ? "text-white delay-[.45s]" : "text-comp"}`}>Regresar</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
                        <img src="" alt="" />
                        <h2 className="text-3xl font-bold mb-6">Iniciar Sesión</h2>
                        <form className="w-full" onSubmit={handleLogin}>
                        <input
                                type="email"
                                value={loginCorreo}
                                onChange={(e) => setLoginCorreo(e.target.value)}
                                placeholder="Correo o número"
                                className="w-full mb-4 p-3 border rounded"
                                required
                            />
                            <input
                                type="password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                placeholder="Contraseña"
                                className="w-full mb-4 p-3 border rounded"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-comp text-white py-2 rounded-full mb-3 flex justify-center items-center"
                                disabled={isLoading} // Deshabilitar el botón cuando esté cargando
                            >
                                {isLoading ? (
                                    <div className="loader"></div> // Círculo de carga
                                ) : (
                                    "Iniciar Sesión"
                                )}
                            </button>

                        </form>
                        {error && (
                            <div className="w-full bg-red-100 text-red-700 p-4 rounded-md mb-4">
                                {error}
                            </div>
                        )}
                        <div className="alt-register flex w-full">
                            <div className="google w-full gap-[6px] justify-center flex items-center py-2 border-[1px] shadow-md rounded-full cursor-pointer bg-white mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                <p>Iniciar sesión con Google</p>
                            </div>
                        </div>
                        <p className="mt-4">
                            ¿Olvidaste la contraseña?
                            <a href="#" className="text-comp none ml-2 font-bold">
                                Click aquí
                            </a>
                        </p>
                    </div>

                    {/* Formulario de Registro */}
                    <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold mb-6">Registrarse</h2>
                        <form className="w-full" onSubmit={registro}>
                        <input
                                type="text"
                                placeholder="Nombre"
                                value={registerNombre}
                                onChange={(e) => setRegisterNombre(e.target.value)}
                                className="w-full mb-4 p-3 border rounded"
                            />
                            <input
                                type="text"
                                placeholder="Apellido"
                                value={registerApellido}
                                onChange={(e) => setRegisterApellido(e.target.value)}
                                className="w-full mb-4 p-3 border rounded"
                            />
                            <input
                                type="email"
                                placeholder="Correo Electrónico o número"
                                value={registerCorreo}
                                onChange={(e) => setRegisterCorreo(e.target.value)}
                                className="w-full mb-4 p-3 border rounded"
                            />
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={registerPassword}
                                onChange={(e) => setRegisterPassword(e.target.value)}
                                className="w-full mb-4 p-3 border rounded"
                            />
                            <button
                                className="w-full bg-comp text-white py-2 rounded-full mb-3 flex justify-center items-center"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="loader"></div>
                                ) : (
                                    "Crear Cuenta"
                                )}
                            </button>

                        </form>
                        {error && (
                            <div className="w-full bg-red-100 text-red-700 p-4 rounded-md mb-4">
                                {error}
                            </div>
                        )}
                        <div className="alt-register flex w-full">
                            <div className="google w-full gap-[6px] justify-center flex items-center py-2 border-[1px] shadow-md rounded-full cursor-pointer bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                <p>Registrarse con Google</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`absolute inset-y-0 left-0 w-full md:w-1/2 bg-[url('assets/banneramburgesa.jpg')] bg-center text-white p-8 flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${isRegistering ? "translate-x-0" : "translate-x-full"
                        }`}
                >

                    <div className='bg-slide before:content-[""] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#0007] z-[-1]'>

                    </div>
                    <img className="bg-[url('assets/logo.png')]" src="" />
                    <h2 className="text-3xl font-bold mb-4">
                        {isRegistering ? "¿Ya tienes una cuenta?" : "¿Aún no tienes cuenta?"}
                    </h2>
                    <p className="mb-8">
                        {isRegistering ? "Inicia Sesión para continuar" : "Regístrate para empezar"}
                    </p>
                    <button
                        className="bg-white text-comp px-4 py-2 rounded-full shadow-lg font-semibold"
                        onClick={toggleForm}
                    >
                        {isRegistering ? "Iniciar Sesión" : "Registrarse"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
