/*global describe*/

/**
 * This helper function provides convenience methods
 * and consistent namespacing in specs for *reducers*.
 */
const describeReducer = (reducer, spec) => {
  describe(`Redux Reducer: ${reducer.name}`, () => {
    spec();
  });
};

export default describeReducer;
