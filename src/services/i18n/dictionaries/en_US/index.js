/* eslint camelcase: "off"*/

/**
 * A dictionary of all phrases used by this app.
 * Locale: English (United States)
 *
 * @param {string} key The unique identifier of the string to translate.
 * @param {array} more Any additional arguments needed by the translation.
 *
 * @returns {string} The translated string.
 */
const en_US = (key, ...more) => ({
  password: () => 'Password',
  sign_in: () => 'Sign In'
}[key](...more));

export default en_US;
