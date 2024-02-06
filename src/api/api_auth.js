import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080"
});

export const API_AUTH= {

    //авторизация
    setAuth(username, password) {
        return instanse
            .post("/login", {
                username,
                password
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //проверка авторизация
    checkAuth() {
        return instanse
            .get("/api/check")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //logout
    setLogout() {
        return instanse
            .get("/logout")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //регистрация
    setRegister(username, email, password) {
        return instanse
            .post("/register", {
                username,
                email,
                password
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },
}