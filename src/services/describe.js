/*global describe*/

const describeService = (service, spec) => {
  describe(`Service: ${service.name}`, () => {
    spec();
  });
};

export default describeService;
