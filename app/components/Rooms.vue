<template>
  <div id="rooms">
    <h2 class="mb-4">
      Rooms
      <b-button size="sm" v-b-modal.create-modal class="ml-2 mr-2" v-b-tooltip.hover title="Create new room">
        <font-awesome-icon :icon="icons.faPlus"/>
      </b-button>
      <b-button size="sm" v-b-modal.join-modal v-b-tooltip.hover title="Join existing room">
        <font-awesome-icon :icon="icons.faSignInAlt"/>
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
            <font-awesome-icon :icon="icons.faSignInAlt"/>
          </b-button>
          <b-button @click="deleteRoom(room)" variant="danger" v-if="room.userId === currUserId">
            <font-awesome-icon :icon="icons.faTrash"/>
          </b-button>
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
  import {mapActions, mapGetters} from 'vuex'
  import {faPlus, faSignInAlt, faTrash} from '@fortawesome/fontawesome-free-solid'

  export default {
    name: 'rooms',
    data() {
      return {
        newRoom: {},
        currUserId: undefined
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
        createRoomInStore: 'create',
        removeRoom: 'remove',
      }),
      createRoom() {
        this.createRoomInStore(this.newRoom)
          .then(() => {
            // this.rooms.push(this.newRoom)
          })
          .catch(() => {
            this.$toasted.error('You can\'t do that!');
          });
        this.newRoom = {};
      },
      joinRoom() {
        console.log(this.rooms);
        console.log("Join room");
      },
      deleteRoom(room) {
        this.$toasted.show('Are you sure you want to remove this room?', {
            action: [
              {
                text: 'Yes!',
                onClick: (e, toast) => {
                  toast.goAway(0);
                  this.removeRoom(room._id)
                    .then(() => {
                      this.$toasted.info('Room removed');
                    })
                    .catch(() => {
                      this.$toasted.error('You can\'t do that!');
                    });
                }
              },
              {
                text: 'No...',
                onClick: (e, toast) => {
                  toast.goAway(0);
                }
              },
            ]
          }
        )
      }
    },
    created() {
      this.findRooms({});
      this.currUserId = this.$store.state.auth.user._id;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
