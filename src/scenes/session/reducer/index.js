import { SESSION_CREATE_FINISH, SESSION_CREATE_START } from '../actions/create';

/**
 * This reducer creator manages state specifically related to the Session scene.
 *
 * @param initialState {Object} The initial state for this reducer to have seeded,
 * before any actions have been dispatched.
 *
 * @return {Function} A reducer function, of the signature expected by `Array#reduce`,
 * where the *accumulator* is a state object being built, and the *value* is an
 * action that was dispatched -- the initial value seeded into the underlying
 * reduce is the most recent state.
 */
const createSessionReducer = (initialState = {}) => (state = initialState, action) => {
  switch (action.type) {
    case SESSION_CREATE_START:
      // Note: Mutate the given state instead of creating a new object. Because performance.
      state.isCreating = true;
      break;
    case SESSION_CREATE_FINISH:
      state.isCreating = false;
      if (!action.error) {
        ({ payload: state.session } = action);
      }
      // TODO: What will our strategy be for error handling?
      break;
  }
  return state;
};

export default createSessionReducer;
