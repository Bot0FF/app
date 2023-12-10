import $api from "./UrlService";

export const mainPage = async () => {
    $api.get("/")
    .then(response => {

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

    },
    error => {
        console.log(error.response.data);
    })
};