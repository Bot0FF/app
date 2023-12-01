import { makeAutoObservable } from "mobx"
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL } from "./index";

export default class Store {
    user;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user) {
        this.user = user;
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login (username, password) {
        try {
            const response = await AuthService.login(username, password);
            localStorage.setItem("accessToken", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.player);
        } catch(e) {
            console.log(e.response);
        }
    }

    async register (username, email, password) {
        try {
            const response = await AuthService.register(username, email, password);
            localStorage.setItem("accessToken", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.player);
        } catch (e) {
            console.log(e.response);
        }
    }

    async logout () {
        try {
            await AuthService.logout();
            localStorage.removeItem("accessToken");
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem("accessToken", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.player);
        } catch (e) {
            console.log(e.response);
        } finally {
            this.setLoading(false);
        }
    }
}