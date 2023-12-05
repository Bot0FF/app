import $api from "./UrlService";

const login = async (username, password) => {
    return $api.post("/auth", {
        username,
        password
    });
};  

const logout = async () => {
    return $api.post("/logout");
};

const register = async (username, email, password) => {
    return $api.post("/register", {
        username,
        email,
        password
    });
};

const checkAuth = async () => {
    return $api.get();
};

const AuthService = {
    register,
    login,
    logout,
    checkAuth
};
  
export default AuthService;