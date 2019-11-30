import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/Home";
import SignIn from "../components/Auth/SignIn";
import SignOut from "../components/Auth/SignOut";
import SignUp from "../components/Auth/SignUp";
import Profile from "../components/Profile";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            name: 'Home',
            component: Home
        },
        {
            path: '/signIn',
            name: 'Sign In',
            component: SignIn
        },
        {
            path: '/signOut',
            name: 'Sign Out',
            component: SignOut
        },
        {
            path: '/signUp',
            name: 'Sign Up',
            component: SignUp
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
    ],
    mode: 'history'
})
