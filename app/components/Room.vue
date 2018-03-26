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

    <ul>
      <li v-for="user in this.onlineUsers" :key="user.userId">{{user.userId}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import {faSignOutAlt} from '@fortawesome/fontawesome-free-solid'

  export default {
    name: "room",
    data() {
      return {
        roomUserId: false,
        interval: null,
      }
    },
    computed: {
      ...mapGetters('rooms', {
        findRoomInStore: 'find',
      }),
      ...mapGetters('room-users', {
        findUsersInRoom: 'find',
      }),
      room() {
        const result = this.findRoomInStore({query: {_id: this.$route.params.id}});
        return result.total === 1 ? result.data[0] : {};
      },
      icons() {
        return {
          faSignOutAlt
        }
      },
      onlineUsers() {
        return this.findUsersInRoom({query: {roomId: this.$route.params.id}}).data;
      },
    },
    methods: {
      ...mapActions('rooms', {
        findRoom: 'find',
      }),
      ...mapActions('room-users', {
        enterRoom: 'create',
        patchRoomUser: 'patch',
      }),
      ping() {
        if (this.roomUserId) {
          this.patchRoomUser([
            this.roomUserId,
            {lastPing: new Date().getTime()}
          ]);
        }
      }
    },
    created() {
      this.findRoom({query: {_id: this.$route.params.id}});
      this.enterRoom({
        roomId: this.$route.params.id,
        lastPing: new Date().getTime()
      })
        .then((userRoom) => {
          this.roomUserId = userRoom._id;
        });

      this.interval = setInterval(function () {
        this.ping()
      }.bind(this), 2000);
    },
    beforeDestroy() {
      clearInterval(this.interval);
    }
  }
</script>

<style scoped>

</style>
