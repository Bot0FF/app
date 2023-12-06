import $api from "./UrlService";

export const login = async (username, password) => {
    return $api.post("/auth", {
        username,
        password
    });
};  

export const logout = async () => {
    return $api.post("/logout");
};

export const register = async (username, email, password) => {
    return $api.post("/register", {
        username,
        email,
        password
    });
};

export const checkAuth = async () => {
    return $api.get();
};