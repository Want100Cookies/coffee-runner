import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import Toasted from 'vue-toasted';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import store from './store'
import router from './router'

store.dispatch('auth/authenticate');

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Toasted);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
