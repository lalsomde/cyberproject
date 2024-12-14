// src/services/authService.ts
export const authenticateUser = async (username: string, password: string) => {
    try {
        // Replace with actual authentication logic or API call
        return username === 'admin' && password === 'secure';
    } catch (error) {
        console.error('Authentication error:', error);
        throw error;
    }
};