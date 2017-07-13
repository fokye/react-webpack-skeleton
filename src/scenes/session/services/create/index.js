const mockSession = () => ({
  user: {
    id: 1,
    name: 'Thomas'
  }
});

const createSession = () => {
  return new Promise((resolve) => {
    const session = mockSession();
    resolve(session);
  });
};

export default createSession;
