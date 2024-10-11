import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'https://localhost:7152/',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default {
    login(data) {
        return apiClient.post('/api/Login/login', data);
    },
    register(data) {
        return apiClient.post('/api/Registration/register', data);
    },
};
//# sourceMappingURL=apiService.js.map