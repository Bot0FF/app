import { login, register, logout } from "../services/AuthService"
import { updateUser } from "../index";

class UserAuth {

    async login (username, password) {
        try {
            const response = await login(username, password);
            updateUser(response.data, true);
        } catch(e) {
            console.log(e.response);
        }
    }

    async register (username, email, password) {
        try {
            const response = await register(username, email, password);
            updateUser(response.data, true);
        } catch (e) {
            console.log(e.response);
        }
    }

    async logout () {
        try {
            await logout();
            updateUser({}, false);
        } catch (e) {
            console.log(e.response);
        }
    }
}

export default new UserAuth();