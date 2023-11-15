import Main from '../pages/main/Main'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

export const publicRoutes = [
    {path: '/', component: <Main/>, exact: true},
    {path: '/login', component: <Login/>, exact: true},
    {path: '/register', component: <Register/>, exact: true}
]

export const privateRoutes = [
    {path: '/', component: <Main/>, exact: true},
    {path: '/login', component: <Login/>, exact: true},
    {path: '/register', component: <Register/>, exact: true}
]