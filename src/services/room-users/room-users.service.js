// Initializes the `room-users` service on path `/room-users`
const createService = require('feathers-memory');
const hooks = require('./room-users.hooks');

module.exports = function (app) {

  const paginate = app.get('paginate');

  const options = {
    name: 'room-users',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/room-users', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('room-users');

  service.hooks(hooks);
};
