import { makeAutoObservable } from "mobx"

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
}