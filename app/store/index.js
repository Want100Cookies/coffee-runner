import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from '../feathers-client'

const {service, auth} = feathersVuex(feathersClient, {idField: '_id'});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    service('users'),
    service('rooms'),
    service('room-users'),
    service('coffee-run'),
    service('coffee-choice'),

    auth({userService: 'users'})
  ]
})
