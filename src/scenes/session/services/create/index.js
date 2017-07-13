const SECONDS = 1000;

const mockSession = () => ({
  user: {
    id: 1,
    name: 'Thomas'
  }
});

const create = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSession());
    }, 1 * SECONDS);
  });
};

export default create;
