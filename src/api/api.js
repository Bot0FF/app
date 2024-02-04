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

    //главная страница user + location
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

    //запрос списка ais
    getAis() {
        return instanse
            .get("/api/main/location/ais")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //запрос списка units
    getUnits() {
        return instanse
            .get("/api/main/location/units")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //запрос списка things
    getThings() {
        return instanse
            .get("/api/main/location/things")
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
        if (targetId === undefined) {
            targetId = 0;
        }
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

    //выбор умения и цели при атаке
    getAbility() {
        return instanse
            .get("/api/fight/ability")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //забрать выбранную вещь
    takeThing(thingId) {
        if (thingId === undefined) {
            thingId = 0;
        }
        return instanse
            .get("/api/main/thing/take?thingId=" + thingId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },
}