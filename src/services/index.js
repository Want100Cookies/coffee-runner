const users = require('./users/users.service.js');
const rooms = require('./rooms/rooms.service.js');
const coffeeRun = require('./coffee-run/coffee-run.service.js');
const coffeeChoice = require('./coffee-choice/coffee-choice.service.js');
const roomUsers = require('./room-users/room-users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(rooms);
  app.configure(coffeeRun);
  app.configure(coffeeChoice);
  app.configure(roomUsers);
};
