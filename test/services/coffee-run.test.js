const assert = require('assert');
const app = require('../../src/app');

describe('\'coffee-run\' service', () => {
  it('registered the service', () => {
    const service = app.service('coffee-run');

    assert.ok(service, 'Registered the service');
  });
});
