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
    getMyModel(id: number) {
        return apiClient.get(`/api/mymodels/${id}`);
    },
    createMyModel(data: any) {
        return apiClient.post('/api/mymodels', data);
    },
    updateMyModel(id: number, data: any) {
        return apiClient.put(`/api/mymodels/${id}`, data);
    },
    deleteMyModel(id: number) {
        return apiClient.delete(`/api/mymodels/${id}`);
    },
};