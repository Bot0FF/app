import { makeAutoObservable } from "mobx"
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL } from "./index";

export default class Store {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(username) {
        this.user = username;
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    async login (username, password) {
        try {
            const response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            this.setUser(response.data.username);
            this.setAuth(true);
        } catch(e) {
            console.log(e.response);
        }
    }

    async registration (username, password) {
        try {
            const response = await AuthService.registration(username, password);
            console.log(response)
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.username);
        } catch (e) {
            console.log(e.response);
        }
    }

    async logout () {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response);
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get(`${API_URL}/refresh`)
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.username);
        } catch (e) {
            // console.log(e.response);
        }
    }
}