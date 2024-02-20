import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080"
});

export const API_PROFILE = {

    //профиль unit
    getProfile() {
        return instanse
            .get("/api/profile")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //инвентарь unit
    getUnitInventory() {
        return instanse
            .get("/api/profile/inventory/all")
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
            .get("/api/profile/inventory/remove?thingId=" + thingId)
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
            .get("/api/profile/inventory/puton?thingId=" + thingId)
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
            .get("/api/profile/inventory/takeoff?thingId=" + thingId)
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
            .get("/api/profile/attribute/up?attribute=" + attribute)
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
            .get("/api/profile/attribute/down?attribute=" + attribute)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //все умения unit
    getAllAbilities() {
        return instanse
            .get("/api/profile/abilities/all")
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
            .get("/api/profile/special/thing/add?thingId=" + thingId)
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
            .get("/api/profile/special/thing/remove?thingId=" + thingId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },
}