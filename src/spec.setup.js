import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import cssModulesRequireHook from 'css-modules-require-hook';
import sinonChai from 'sinon-chai';

/**
 * Specs don't care about CSS modules, so just stub this.
 */
cssModulesRequireHook({});

/**
 * Integrate expectation chains useful for validating React component rendering.
 */
chai.use(chaiEnzyme());

/**
 * Integrate expectation chains useful for validating sinon spy/stub calls.
 */
chai.use(sinonChai);
