<template>
  <div id="room">
    <h2>
      {{room.name}}
      <small class="mr-2">Room</small>
      <b-button size="sm" class="mr-2">Create coffee run</b-button>
      <b-button to="/" size="sm" variant="danger">Leave</b-button>
    </h2>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'

  export default {
    name: "room",
    computed: {
      ...mapGetters('rooms', {
        findRoomInStore: 'find',
      }),
      room() {
        const result = this.findRoomInStore({query: {_id: this.$route.params.id}});
        return result.total === 1 ? result.data[0] : {};
      }
    },
    methods: {
      ...mapActions('rooms', {
        findRoom: 'find',
      })
    },
    created() {
      this.findRoom({query: {_id: this.$route.params.id}});
    }
  }
</script>

<style scoped>

</style>
