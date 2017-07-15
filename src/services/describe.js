/*global describe*/

/**
 * This helper function provides convenience methods
 * and consistent namespacing in specs for *services*.
 */
const describeService = (service, spec) => {
  describe(`Service: ${service.name}`, () => {
    spec();
  });
};

export default describeService;
