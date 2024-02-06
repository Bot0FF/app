import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080"
});

export const API_MAIN = {

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

    //запрос списка ais с локации
    getLocationAis() {
        return instanse
            .get("/api/main/location/ais")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //запрос списка units с локации
    getLocationUnits() {
        return instanse
            .get("/api/main/location/units")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //запрос списка things с локации
    getLocationThings() {
        return instanse
            .get("/api/main/location/things")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //запрос списка things из инвентаря
    getInventoryThings() {
        return instanse
            .get("/api/main/inventory/things")
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