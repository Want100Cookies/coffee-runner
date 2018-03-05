<template>
  <div id="register">
    <b-form @submit="register">
      <b-form-group id="emailGroup"
                    label="Email address:"
                    label-for="email">
        <b-form-input id="email"
                      type="email"
                      v-model="user.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="passwordGroup"
                    label="Password:"
                    label-for="password">
        <b-form-input id="password"
                      type="password"
                      v-model="user.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
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
        event.preventDefault();

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
