const en_US = (key, ...more) => ({
  password: () => 'Password',
  sign_in: () => 'Sign In'
})[key](...more);

export default en_US;
