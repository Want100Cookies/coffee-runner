const assert = require('assert');
const app = require('../../src/app');

describe('\'coffee-choice\' service', () => {
  it('registered the service', () => {
    const service = app.service('coffee-choice');

    assert.ok(service, 'Registered the service');
  });
});
