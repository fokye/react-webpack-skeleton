/*global describe*/

const describeScene = (scene, spec) => {
  describe(`Redux Scene: ${scene.WrappedComponent.name}`, () => {
    spec();
  });
};

export default describeScene;
