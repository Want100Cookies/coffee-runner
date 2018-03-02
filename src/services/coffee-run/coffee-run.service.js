// Initializes the `coffee-run` service on path `/coffee-run`
const createService = require('feathers-nedb');
const createModel = require('../../models/coffee-run.model');
const hooks = require('./coffee-run.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'coffee-run',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/coffee-run', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('coffee-run');

  service.hooks(hooks);
};
