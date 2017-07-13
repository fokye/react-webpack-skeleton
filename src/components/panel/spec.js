/*global context, it*/
import Panel from './index';

import describeComponent from '_/components/describe';

describeComponent(Panel, () => {
  context('when given children', () => {
    it('should render the children');
  });

  context('when given a header', () => {
    it('should render a header');
  });

  context('when given a footer', () => {
    it('should render a footer');
  });
});
