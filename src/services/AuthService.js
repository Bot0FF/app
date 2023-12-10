import $api from "./UrlService";

export const login = async (username, password) => {
    $api.post("/auth", {
        username,
        password
    })
    .then(response => {

    },
    error => {
        console.log(error.code);
    })
};  

export const logout = async () => {
    $api.post("/logout")
    .then(response => {

    },
    error => {
        console.log(error.code);
    })
};

export const register = async (username, email, password) => {
    $api.post("/register", {
        username,
        email,
        password
    })
    .then(response => {

    },
    error => {
        console.log(error.code);
    })
};

export const checkAuth = async () => {
    $api.get()
    .then(response => {

    },
    error => {
        console.log(error.code);
    })
};