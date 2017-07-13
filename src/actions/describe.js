/*global describe*/

import sinon from 'sinon';

const describeAction = (action, spec) => {
  describe(`Redux Action: ${action.name}`, () => {
    spec({
      performAction: async (...more) => {
        const dispatch = sinon.spy();
        await action(...more)(dispatch);
        return dispatch;
      },

      withState: (state, spec) => {
        spec({
          performAction: async (...more) => {
            const dispatch = sinon.spy();
            await action(...more)(dispatch, () => state);
            return dispatch;
          }
        });
      }
    });
  });
};

export default describeAction;
