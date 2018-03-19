const assert = require('assert');
const app = require('../../src/app');

describe('\'room-users\' service', () => {
  it('registered the service', () => {
    const service = app.service('room-users');

    assert.ok(service, 'Registered the service');
  });
});
