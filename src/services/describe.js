/* global describe*/

/**
 * This helper function provides convenience methods
 * and consistent namespacing in specs for *services*.
 *
 * @param {function} service The service under test.
 * @param {function} spec The test suite for the service.
 *
 * @returns {void}
 */
const describeService = (service, spec) => {
  describe(`Service: ${service.name}`, () => {
    spec();
  });
};

export default describeService;
