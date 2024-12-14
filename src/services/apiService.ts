// src/services/apiService.ts
export const fetchData = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
};
