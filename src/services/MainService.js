import $api from "./UrlService";


const mainPage = () => {
    return $api.get("/");
};
    
const moveUser = async (direction) => {
    return $api.post("/move", {
        direction: direction
    });
};

const MainService = {
    mainPage,
    moveUser
};
  
export default MainService;