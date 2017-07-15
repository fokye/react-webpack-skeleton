/*global describe*/

/**
 * This helper function provides convenience methods
 * and consistent namespacing in specs for *scenes*.
 */
const describeScene = (scene, spec) => {
  describe(`Redux Scene: ${scene.WrappedComponent.name}`, () => {
    spec();
  });
};

export default describeScene;
