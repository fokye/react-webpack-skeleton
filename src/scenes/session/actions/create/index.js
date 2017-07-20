import performCreate from '../../services/create';

/**
 * An action of this type is dispatched whenever we attempt to create a session.
 */
const SESSION_CREATE_START = 'SESSION_CREATE_START';

/**
 * An action of this type is dispatched whenever we have finished attempting to create a session.
 */
const SESSION_CREATE_FINISH = 'SESSION_CREATE_FINISH';

/**
 * Dispatches Redux actions related to session creation.
 * Delegates the app logic to a *service*.
 */
const create = () => async (dispatch) => {
  // An asynchronous Redux action, per convention, should dispatch a START action like this to let the app know it has begun.
  dispatch({ type: SESSION_CREATE_START });
  try {
    // Then, the action is attempted via a service call.
    const session = await performCreate();
    // If all goes well, a FINISH action is dispatched with the service payload.
    dispatch({ payload: session, type: SESSION_CREATE_FINISH });
  } catch (error) {
    // If anything at all goes wrong, dispatch a FINISH action with an "error" flag set whose payload is the error itself.
    dispatch({ error: true, payload: error, type: SESSION_CREATE_FINISH });
  }
};

export { SESSION_CREATE_START, SESSION_CREATE_FINISH };
export default create;
