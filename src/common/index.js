import axios from "axios";

export const API_URL = "http://localhost:8080";

//запрос с базовым URL
const $api = axios.create({
    baseURL: API_URL
});

//добавление к запросу токена 
$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export default $api;