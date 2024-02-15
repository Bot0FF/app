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

    //забрать выбранную вещь с локации
    takeLocationThing(thingId) {
        if (thingId === undefined) {
            thingId = 0;
        }
        return instanse
            .get("/api/main/location/take?thingId=" + thingId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //главная страница user + location
    getProgile() {
        return instanse
            .get("/api/main/profile")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //удалить вещь из инвентаря
    removeInventoryThing(thingId) {
        if (thingId === undefined) {
            thingId = 0;
        }
        return instanse
            .get("/api/main/inventory/remove?thingId=" + thingId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //надеть вещь из инвентаря
    putOnInventoryThing(thingId) {
        if (thingId === undefined) {
            thingId = 0;
        }
        return instanse
            .get("/api/main/inventory/puton?thingId=" + thingId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //снять вещь из инвентаря
    takeOffInventoryThing(thingId) {
        if (thingId === undefined) {
            thingId = 0;
        }
        return instanse
            .get("/api/main/inventory/takeoff?thingId=" + thingId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //повысить аттрибут
    setUpAttribute(attribute) {
        if (attribute === undefined) {
            attribute = "";
        }
        return instanse
            .get("/api/main/attribute/up?attribute=" + attribute)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //----------для админа-------------
    //добавить вещь в инвентарь 
    addThingToInventory(thingId) {
        if (thingId === undefined) {
            thingId = 0;
        }
        return instanse
            .get("/api/special/thing/add?thingId=" + thingId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //удалить вещь из БД 
    removeThingFromDB(thingId) {
        if (thingId === undefined) {
            thingId = 0;
        }
        return instanse
            .get("/api/special/thing/remove?thingId=" + thingId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //понизить аттрибут
    setDownAttribute(attribute) {
        if (attribute === undefined) {
            attribute = "";
        }
        return instanse
            .get("/api/main/attribute/down?attribute=" + attribute)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },
}