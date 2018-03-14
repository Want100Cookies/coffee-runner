const {authenticate} = require('@feathersjs/authentication').hooks;
const hooks = require('feathers-authentication-hooks');


module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [
      hooks.associateCurrentUser(),
      (context) => {
        if (context.data.name.trim() === '') {
          throw new Error('Title cannot be null!');
        }
      }
    ],
    update: [
      (context) => {
        if (context.data.name.trim() === '') {
          throw new Error('Title cannot be null!');
        }
      },
      hooks.restrictToOwner()
    ],
    patch: [
      (context) => {
        if (context.data.name.trim() === '') {
          throw new Error('Title cannot be null!');
        }
      },
      hooks.restrictToOwner()
    ],
    remove: [
      hooks.restrictToOwner()
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
