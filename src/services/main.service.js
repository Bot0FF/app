import axios from 'axios';
import authHeader from '../services/auth-header'

const API_URL_MAIN = 'http://localhost:8080/main'

const mainPage = () => {
    return axios.get(API_URL_MAIN, {headers: authHeader()});
};
    
const moveUp = () => {
    return axios.get(API_URL_MAIN + '/up', {headers: authHeader()});
};

const moveDown = () => {
    return axios.get(API_URL_MAIN + '/down', {headers: authHeader()});
};

const moveLeft = () => {
    return axios.get(API_URL_MAIN + '/left', {headers: authHeader()});
};

const moveRight = () => {
    return axios.get(API_URL_MAIN + '/right', {headers: authHeader()});
};

const UserService = {
    mainPage,
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
};
  
export default UserService;