/**
 * Mocks a naive session object.
 *
 * @returns {Session} A mocked session object.
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
const createSession = () => new Promise((resolve) => {
  const session = mockSession();
  resolve(session);
});

export default createSession;
