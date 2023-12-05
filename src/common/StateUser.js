import { makeAutoObservable } from "mobx"
import AuthService from "../services/AuthService";

export default class StateUser {
    user;
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user) {
        this.user = user;
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    async login (username, password) {
        try {
            const response = await AuthService.login(username, password);
            this.setAuth(true);
            this.setUser(response.data);
        } catch(e) {
            console.log(e.response);
        }
    }

    async register (username, email, password) {
        try {
            const response = await AuthService.register(username, email, password);
            this.setAuth(true);
            this.setUser(response.data);
        } catch (e) {
            console.log(e.response);
        }
    }

    async logout () {
        try {
            await AuthService.logout();
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response);
        }
    }

    async checkAuth() {
        try {
            const response = await AuthService.checkAuth();
            this.setAuth(true);
            this.setUser(response.data);
        } catch (e) {
            console.log(e.response);
        }
    }
}