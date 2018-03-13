<template>
  <div id="login">

    <h2>Login</h2>

    <b-form @submit="login">
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
      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="button" to="register" class="ml-2">Register</b-button>
    </b-form>
  </div>
</template>

<script>
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
        event.preventDefault();

        this.$store.dispatch('auth/authenticate', {
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
