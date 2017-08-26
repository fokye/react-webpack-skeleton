/* global describe, it*/
import create, { SESSION_CREATE_FINISH, SESSION_CREATE_START } from './index';

import chai from 'chai';
import describeAction from '_/actions/describe';

const { expect } = chai;

describeAction(create, ({ performAction }) => {
  const subject = () => performAction();

  it('should dispatch two actions', async () => {
    expect(await subject()).to.have.been.calledTwice;
  });

  describe('the 1st action', () => {
    const subject = async () => {
      const dispatch = await performAction();
      const { args: [action] } = dispatch.getCall(0);
      return action;
    };

    it('should be of type SESSION_CREATE_START', async () => {
      expect(await subject()).to.have.property('type', SESSION_CREATE_START);
    });
  });

  describe('the 2nd action', () => {
    const subject = async () => {
      const dispatch = await performAction();
      const { args: [action] } = dispatch.getCall(1);
      return action;
    };

    it('should be of type SESSION_CREATE_FINISH', async () => {
      expect(await subject()).to.have.property('type', SESSION_CREATE_FINISH);
    });
  });
});
