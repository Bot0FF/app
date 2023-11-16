export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'))

    if(user && user.token) {
        return {Authorisation: 'Bearer' + user.token};
    } 
    else return {};
}