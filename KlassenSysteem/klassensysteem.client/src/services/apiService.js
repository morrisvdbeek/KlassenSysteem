import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'https://localhost:7152/',
    headers: {
        'Content-Type': 'application/json',
    },
});
const apiService = {
    login(data) {
        return apiClient.post('/api/Login/login', data);
    },
    register(data) {
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
};
export default apiService;
//# sourceMappingURL=apiService.js.map