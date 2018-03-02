<template>
  <div class="register">
    <p>Register page</p>
    <input type="email" v-model="user.email" placeholder="email@address.com">
    <input type="password" v-model="user.password" placeholder="password">
    <button type="button" v-on:click="register">Register</button>
  </div>
</template>

<script>
  import store from '../store'

  export default {
    name: 'Register',
    data() {
      return {
        user: {
          email: '',
          password: '',
        }
      }
    },
    methods: {
      register: function (event) {
        store.dispatch('users/create', this.user).then(() => {
          this.$router.push('login');
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
