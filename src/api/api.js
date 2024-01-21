import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080"
});

export const API = {

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
            .get("/api/main/move?direction=" + direction)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //атака выбранного противника
    getAttack(targetId) {
        return instanse
            .get("/api/fight/attack?targetId=" + targetId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //обновление страницы сражения
    getFightRefresh() {
        return instanse
            .get("/api/fight/refresh")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //выбор умения и цели при атаке
    setHit(abilityId, targetId) {
        return instanse
            .get("/api/fight/hit?abilityId=" + abilityId + "&targetId=" + targetId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },
}