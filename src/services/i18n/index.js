/* eslint camelcase: "off"*/

import en_US from './dictionaries/en_US';

/**
 * Dictionaries defined by this app, by locale code.
 */
const I18n = {
  default: en_US,
  en: en_US,
  en_US
};

/**
 * Translates from the given key and the given optional arguments
 * to the appropriate translation.
 *
 * @param {string} key The key to translate.
 * @param {array} more Optional. A variable list of arguments expected by the given translation key.
 *
 * @return {String} The translation key.
 *
 * @throws {Error} if no translation for the given key can be found.
 */
const t = (key, ...more) => I18n.default(key, ...more);

export { t };
export default I18n;
