import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080"
});

export const API = {
    // страница приветствия
    getGreeting() {
        return instanse
            .get("/api/main/im")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //библиотека
    getLibrary(type) {
        return instanse
            .get(type)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

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

    //главная страница
    getMain() {
        return instanse
            .get("/api/main/im")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //перемещение
    getMove(direction) {
        return instanse
            .get("/api/main/move/" + direction)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //список игроков
    getPlayers() {
        return instanse
            .get("/api/main/players")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //профиль игрока
    getProfile(name) {
        return instanse
            .get("/api/main/profile/" + name)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    }
}