import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080"
});

export const API_FIGHT = {

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
    setHitWeapon(targetId) {
        return instanse
            .get("/api/fight/hit/weapon?targetId=" + targetId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //выбор умения и цели при атаке
    setHitAbility(abilityId, targetId) {
        return instanse
            .get("/api/fight/hit/ability?abilityId=" + abilityId + "&targetId=" + targetId)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //перемещение на поле сражения
    setMove(direction) {
        return instanse
            .get("/api/fight/move?direction=" + direction)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },

    //завершение хода
    setActionEnd() {
        return instanse
            .get("/api/fight/action/end")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    },
}