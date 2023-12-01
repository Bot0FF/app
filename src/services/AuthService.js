import $api from "../common/index";

const login = async (username, password) => {
    return $api.post("/auth", {
        username, 
        password
    });
};  

const logout = async () => {
    return $api.get("/logout");
};

const register = async (username, email, password) => {
    return $api.post("/register", {
        username,
        email,
        password
    });
};

const AuthService = {
    register,
    login,
    logout
};
  
export default AuthService;