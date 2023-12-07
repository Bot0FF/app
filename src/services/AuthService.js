import $api from "./UrlService";
import { updateUser } from "../index";

export const login = async (username, password) => {
    $api.post("/auth", {
        username,
        password
    })
    .then(response => {
        updateUser(response.data, true)
    },
    error => {
        console.log(error.response.data);
    })
};  

export const logout = async () => {
    $api.post("/logout")
    .then(response => {
        updateUser(response.data, true)
    },
    error => {
        console.log(error.response.data);
    })
};

export const register = async (username, email, password) => {
    $api.post("/register", {
        username,
        email,
        password
    })
    .then(response => {
        updateUser(response.data, true)
    },
    error => {
        console.log(error.response.data);
    })
};

export const checkAuth = async () => {
    $api.get()
    .then(response => {
        updateUser(response.data, true)
    },
    error => {
        console.log(error.response.data);
    })
};