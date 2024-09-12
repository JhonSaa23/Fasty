const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';


export const loginUser = async (correo, contrasena) => {
    try {
        console.log(`${API_URL}/login`)
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo: correo, contrasena: contrasena }),
            credentials: 'include'
        });
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data.message)
        return data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};
export const registerUser = async (nombre, apellido, correo, contrasena)=>{
    try{
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                contrasena: contrasena,
            }),
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const datos = await response.json();
        return datos;
    }catch(error){
        console.error('Error al registrarse', error);
        throw error;
    }
}