/*global beforeEach, context, describe, it*/
import App from './index';
import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const { expect } = chai;

describe('App', () => {
  const name = 'its name';
  const onClick = sinon.spy();
  const component = <App name={name} onClick={onClick}/>;

  it('should render its name', () => {
    expect(shallow(component)).to.include.text(name);
  });

  context('when clicked', () => {
    beforeEach('simulate a click', () => {
      shallow(component).simulate('click');
    });

    describe('its onClick callback', () => {
      it('should have been called once', () => {
        expect(onClick).to.have.been.calledOnce;
      });
    });
  });
});
