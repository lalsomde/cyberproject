// src/hooks/useAuth.ts
import { useState } from 'react';
import { authenticateUser } from '../services/authService';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = async (username: string, password: string) => {
        const auth = await authenticateUser(username, password);
        setIsAuthenticated(auth);
        return auth;
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return { isAuthenticated, login, logout };
};