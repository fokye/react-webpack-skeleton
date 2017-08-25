/*global describe*/

/**
 * This helper function provides convenience methods
 * and consistent namespacing in specs for *reducers*.
 *
 * @param {function} reducer The reducer under test.
 * @param {function} spec The test suite for the reducer.
 *
 * @returns {void}
 */
const describeReducer = (reducer, spec) => {
  describe(`Redux Reducer: ${reducer.name}`, () => {
    spec();
  });
};

export default describeReducer;
