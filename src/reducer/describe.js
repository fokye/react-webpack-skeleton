/*global describe*/

const describeReducer = (reducer, spec) => {
  describe(`Redux Reducer: ${reducer.name}`, () => {
    spec();
  });
};

export default describeReducer;
