import axios from "axios";

const API_URL = "http://localhost:8080/api/"

class AuthService {
    async login(username, password) {
        const response = await axios
            .post(API_URL + 'auth', {
                username,
                password
            });
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('user')
    }

    register(username, password, email) {
        return axios.post(API_URL + 'register', {
            username,
            password,
            email
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
}

export default new AuthService();