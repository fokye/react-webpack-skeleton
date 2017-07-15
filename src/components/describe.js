/*global describe*/

/**
 * This helper function provides convenience methods
 * and consistent namespacing in specs for *components*.
 */
const describeComponent = (component, spec) => {
  describe(`React Component: <${component.name}/>`, () => {
    spec();
  });
};

export default describeComponent;
