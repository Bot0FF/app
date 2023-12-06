import $api from "./UrlService";
import { updateUser } from "../index";

export const mainPage = async () => {
    return $api.get("/");
};
    
export const moveUser = async (direction) => {
    $api.post("/move", {
        direction: direction
    })
    .then(response => {
        updateUser(response.data, true)
    })
};