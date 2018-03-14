<template>
  <div id="rooms">
    <h2 class="mb-4">
      Rooms
      <b-button size="sm" v-b-modal.create-modal class="ml-2 mr-2" v-b-tooltip.hover title="Create new room">
        <font-awesome-icon :icon="icons.faPlus" />
      </b-button>
      <b-button size="sm" v-b-modal.join-modal v-b-tooltip.hover title="Join existing room">
        <font-awesome-icon :icon="icons.faSignInAlt" />
      </b-button>
    </h2>

    <p class="text-muted" v-if="!rooms.total">No rooms available</p>

    <div class="row">
      <div class="col-4 mb-2 mr-2"
           v-for="room in rooms.data"
           :key="room._id">
        <b-card :header="room.name"
                :id="room._id"
                border-variant="primary"
                align="center">
          <p class="card-text">
            {{room.description}}
          </p>

          <b-button :to="`rooms/${room._id}`" variant="primary" class="mr-2" v-b-tooltip.hover title="Join room">
            <font-awesome-icon :icon="icons.faSignInAlt" />
          </b-button>
          <!--<b-button variant="danger" v-if="room.userId === ">-->
            <!--<font-awesome-icon :icon="icons.faTrash" />-->
          <!--</b-button>-->
        </b-card>
      </div>

    </div>

    <b-modal id="create-modal" title="Create new room" ok-title="Create" @ok="createRoom">
      <b-form-group id="createNameGroup"
                    label="Name:"
                    label-for="create-name">
        <b-form-input id="create-name"
                      type="text"
                      v-model="newRoom.name"
                      required
                      placeholder="Enter room name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="createDescriptionGroup"
                    label="Description:"
                    label-for="create-description">
        <b-form-input id="create-description"
                      type="text"
                      v-model="newRoom.description"
                      required
                      placeholder="Enter room description">
        </b-form-input>
      </b-form-group>
    </b-modal>

    <b-modal id="join-modal" title="Join new room" ok-title="Join" @ok="joinRoom">
      Room name
    </b-modal>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'
  import {faSignInAlt, faTrash, faPlus} from '@fortawesome/fontawesome-free-solid'

  export default {
    name: 'rooms',
    data() {
      return {
        newRoom: {},
      }
    },
    computed: {
      ...mapGetters('rooms', {
        findRoomsInStore: 'find',
      }),
      rooms() {
        return this.findRoomsInStore({});
      },
      icons() {
        return {
          faSignInAlt,
          faTrash,
          faPlus
        }
      }
    },
    methods: {
      ...mapActions('rooms', {
        findRooms: 'find',
      }),
      createRoom(event) {
        this.$store.dispatch('rooms/create', this.newRoom)
          .then(() => {
            // this.rooms.push(this.newRoom)
          })
          .catch((error) => {
            console.log("whoops?");
          });
        this.newRoom = {};
      },
      joinRoom(event) {
        console.log(this.rooms);
        console.log("Join room");
      }
    },
    created() {
      this.findRooms({});
      // get current user from store?
      console.log(this.$store);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
