/* global it*/
import create from './index';
import describeService from '_/services/describe';

describeService(create, () => {
  it('should have some tests written for it');
});
