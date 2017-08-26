/* global describe*/

/**
 * This helper function provides convenience methods
 * and consistent namespacing in specs for *scenes*.
 *
 * @param {React.Component} scene The scene under test.
 * @param {function} spec The test suite for the scene.
 *
 * @returns {void}
 */
const describeScene = (scene, spec) => {
  describe(`Redux Scene: ${scene.WrappedComponent.name}`, () => {
    spec();
  });
};

export default describeScene;
