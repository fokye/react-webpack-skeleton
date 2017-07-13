/*global describe*/

const describeComponent = (component, spec) => {
  describe(`React Component: <${component.name}/>`, () => {
    spec();
  });
};

export default describeComponent;
