<template>
  <div class="login">
    <p>Login page</p>
    <input type="email" v-model="user.email" placeholder="email@address.com">
    <input type="password" v-model="user.password" placeholder="password">
    <button type="button" v-on:click="login">Login</button>
  </div>
</template>

<script>
  import store from '../store'

  export default {
    name: 'Login',
    data() {
      return {
        user: {
          email: '',
          password: '',
        }
      }
    },
    methods: {
      login: function (event) {
        store.dispatch('auth/authenticate', {
          strategy: 'local',
          ...this.user
        }).then(() => {
          this.$router.push('/');
        }).catch((exception) => {
          alert(exception)
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
