/* global describe*/

/**
 * This helper function provides convenience methods
 * and consistent namespacing in specs for *components*.
 *
 * @param {React.Component} component The component under test.
 * @param {function} spec The test suite for the component.
 *
 * @returns {void}
 */
const describeComponent = (component, spec) => {
  describe(`React Component: <${component.name}/>`, () => {
    spec();
  });
};

export default describeComponent;
