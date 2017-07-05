import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import cssModulesRequireHook from 'css-modules-require-hook';
import sinonChai from 'sinon-chai';

cssModulesRequireHook({});

chai.use(chaiEnzyme());
chai.use(sinonChai);
