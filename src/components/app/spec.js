import React from 'react';

import App from './index';

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should render its name', function() {
    const name = 'its name';
    const subject = shallow(<App name={name}/>);
    expect(subject).to.include.text(name);
  });
});
