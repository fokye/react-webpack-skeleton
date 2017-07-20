/**
 * Mocks a naive session object.
 */
const mockSession = () => ({
  user: {
    id: 1,
    name: 'Thomas'
  }
});

/**
 * A basic implementation of an asynchronous session creator, which
 * eventually returns a mock session.
 *
 * @return {Promise} Resolves to a mock session, always.
 */
const createSession = () => {
  // TODO: Maybe accept some function arguments here.
  return new Promise((resolve) => {
    // TODO: Actually perform some real authentication here.
    const session = mockSession();
    resolve(session);
  });
};

export default createSession;
