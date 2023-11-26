import $api from "../http/index";


const mainPage = () => {
    return $api.get("/");
};
    
const moveUp = () => {
    return $api.get("/move/up");
};

const moveDown = () => {
    return $api.get("/move/down");
};

const moveLeft = () => {
    return $api.get("/move/left");
};

const moveRight = () => {
    return $api.get("/move/right");
};

const UserService = {
    mainPage,
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
};
  
export default UserService;