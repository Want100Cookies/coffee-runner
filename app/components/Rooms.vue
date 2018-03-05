<template>
  <div id="rooms">
    <h2>Rooms</h2>

    <p-button type="button">Create new room</p-button>

    <div class="row">
      <b-card title="Room name"
              class="mb-2">
        <p class="card-text">
          Some short description
        </p>
        <b-button href="#" variant="primary">Join</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Rooms',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
