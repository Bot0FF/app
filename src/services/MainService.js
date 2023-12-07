import $api from "./UrlService";
import { updateUser } from "../index";

export const mainPage = async () => {
    $api.get("/")
    .then(response => {
        updateUser(response.data, true)
    },
    error => {
        console.log(error.response.data);
    })
};
    
export const moveUser = async (direction) => {
    $api.post("/move", {
        direction: direction
    })
    .then(response => {
        updateUser(response.data, true)
    },
    error => {
        console.log(error.response.data);
    })
};