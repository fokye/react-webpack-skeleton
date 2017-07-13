import performCreate from '../../services/create';

const SESSION_CREATE_START = 'SESSION_CREATE_START';
const SESSION_CREATE_FINISH = 'SESSION_CREATE_FINISH';

const create = () => async (dispatch) => {
  dispatch({ type: SESSION_CREATE_START });
  try {
    const session = await performCreate();
    dispatch({ payload: session, type: SESSION_CREATE_FINISH });
  } catch (error) {
    dispatch({ error: true, payload: error, type: SESSION_CREATE_FINISH });
  }
};

export { SESSION_CREATE_START, SESSION_CREATE_FINISH };
export default create;
