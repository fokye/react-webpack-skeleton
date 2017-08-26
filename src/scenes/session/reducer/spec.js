/* global it*/

import createSessionReducer from './index';
import describeReducer from '_/reducer/describe';

describeReducer(createSessionReducer, () => {
  it('should have some tests written for it');
});
