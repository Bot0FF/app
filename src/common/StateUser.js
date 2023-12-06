import { makeAutoObservable } from "mobx"
import { checkAuth } from "../services/AuthService";

export default class StateUser {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user, bool) {
        this.user = user;
        this.isAuth = bool;
    }

    async checkAuth() {
        try {
            const response = await checkAuth();
            this.setUser(response.data, true);
        } catch (e) {
            console.log(e.response);
        }
    }
}