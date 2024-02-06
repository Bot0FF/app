import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080"
});

export const API_FIGHT= {

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
}