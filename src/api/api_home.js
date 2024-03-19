import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080"
});

export const API_HOME = {

    //инвентарь unit
    getUnitInventory() {
        return instanse
            .get("/api/home/inventory/all")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //оставить предмет на складе
    keepHomeThing(thingId) {
        if (thingId === undefined) {
            thingId = 0;
        }
        return instanse
            .get("/api/home/keep?thingId=" + thingId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },
    
    //забрать предмет со склада
    takeHomeThing(thingId) {
        if (thingId === undefined) {
            thingId = 0;
        }
        return instanse
            .get("/api/home/take?thingId=" + thingId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },
}