<template>
  <div id="room">
    <h2>
      {{room.name}}
      <small class="mr-2">Room</small>
      <b-button size="sm" class="mr-2">Create coffee run</b-button>
      <b-button to="/" size="sm" variant="danger">
        <font-awesome-icon :icon="icons.faSignOutAlt"/>
      </b-button>
    </h2>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import {faSignOutAlt} from '@fortawesome/fontawesome-free-solid'

  export default {
    name: "room",
    computed: {
      ...mapGetters('rooms', {
        findRoomInStore: 'find',
      }),
      room() {
        const result = this.findRoomInStore({query: {_id: this.$route.params.id}});
        return result.total === 1 ? result.data[0] : {};
      },
      icons() {
        return {
          faSignOutAlt
        }
      }
    },
    methods: {
      ...mapActions('rooms', {
        findRoom: 'find',
        enterRoom: 'enterRoom',
      }),
    },
    created() {
      this.findRoom({query: {_id: this.$route.params.id}});
      this.enterRoom({roomId: this.$route.params.id});
    }
  }
</script>

<style scoped>

</style>
