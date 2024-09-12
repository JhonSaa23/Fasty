import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

function PublicRoute({ children }) {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true); // Nuevo estado de carga

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch(`${API_URL}/api/protected`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsAuthenticated(data.authenticated);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Error al verificar la autenticación:', error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [API_URL]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (isAuthenticated === true) {
        return <Navigate to="/" />;
    }

    return children;
}

PublicRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PublicRoute;
