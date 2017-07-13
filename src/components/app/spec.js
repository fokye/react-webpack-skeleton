/*global describe, it*/
import App from './index';
import React from 'react';

import chai from 'chai';
import { shallow } from 'enzyme';

const { expect } = chai;

describe('App', () => {
  const app = <App/>;

  it('should have exactly one SessionScene', function() {
    expect(shallow(app)).to.have.exactly(1).descendants('SessionScene');
  });
});
