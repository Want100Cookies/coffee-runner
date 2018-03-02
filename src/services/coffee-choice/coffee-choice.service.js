// Initializes the `coffee-choice` service on path `/coffee-choice`
const createService = require('feathers-nedb');
const createModel = require('../../models/coffee-choice.model');
const hooks = require('./coffee-choice.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'coffee-choice',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/coffee-choice', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('coffee-choice');

  service.hooks(hooks);
};
