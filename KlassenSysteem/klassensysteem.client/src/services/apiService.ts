import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://localhost:7152/',
    headers: {
        'Content-Type': 'application/json',
    },
});

const apiService = {
    login(data: any) {
        return apiClient.post('/api/Login/login', data);
    },
    register(data: any) {
        return apiClient.post('/api/Registration/register', data);
    },
    getDashboardData() {
        const token = localStorage.getItem('token');
        return apiClient.get('/api/dashboard', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    refreshToken(refreshToken: string) {
        return apiClient.post('/api/Login/refresh-token', { token: refreshToken });
    }
};

export default apiService;