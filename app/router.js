import Register from './components/Register'
import Login from './components/Login'
import Rooms from './components/Rooms'

import VueRouter from 'vue-router'
import store from "./store";

const routes = [
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/', component: Rooms}
];

const publicPages = ['/register', '/login'];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  console.log(store.state.auth.user);
  if (publicPages.includes(to.path) && store.state.auth.user != null) {
    next('/');
    console.log("You are already logged in!");
    return;
  }

  if (!publicPages.includes(to.path) && store.state.auth.user == null) {
    next('/login');
    console.log("You are not logged in!");
    return;
  }

  // Todo: handle 404

  next();
});

export default router;
