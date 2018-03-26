// Initializes the `room-users` service on path `/room-users`
const createService = require('feathers-memory');
const hooks = require('./room-users.hooks');

module.exports = function (app) {

  const options = {
    name: 'room-users',
    id: '_id',
  };

  // Initialize our service with any options it requires
  app.use('/room-users', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('room-users');

  service.hooks(hooks);

  const TEN_SEC = 10 * 1000;

  setInterval(() => {
    service.find({
      query: {
        lastPing: {
          $lt: new Date().getTime() - TEN_SEC
        }
      }
    })
      .then((response) => {
        for (let item of response) {
          service
            .remove(item._id)
            .then(() => console.log(`Removed entry ${item._id} due to inactivity`));
        }
      });
  }, TEN_SEC);
};
