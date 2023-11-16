import axios from "axios";

const API_URL = "http://localhost:8080/";

const login = async (username, password) => {
    const response = await axios
        .post(API_URL + 'auth', {
            username,
            password
        });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};  

const logout = async () => {
    localStorage.removeItem('user');
    const response = await axios.post(API_URL);
    return response.data;
};  

const register = (username, email, password) => {
    return axios.post(API_URL + 'register', {
        username,
        email,
        password
    });
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};
  
export default AuthService;