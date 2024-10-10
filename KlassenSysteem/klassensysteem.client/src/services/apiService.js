import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'https://localhost:7152/',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default {
    getMyModels() {
        return apiClient.get('/api/mymodels');
    },
    getMyModel(id) {
        return apiClient.get(`/api/mymodels/${id}`);
    },
    createMyModel(data) {
        return apiClient.post('/api/mymodels', data);
    },
    updateMyModel(id, data) {
        return apiClient.put(`/api/mymodels/${id}`, data);
    },
    deleteMyModel(id) {
        return apiClient.delete(`/api/mymodels/${id}`);
    },
    login(data) {
        return apiClient.post('/api/Login/login', data);
    },
    register(data) {
        return apiClient.post('/api/Registration/register', data);
    },
};
//# sourceMappingURL=apiService.js.map