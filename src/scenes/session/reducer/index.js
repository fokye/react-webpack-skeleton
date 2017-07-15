import { SESSION_CREATE_FINISH, SESSION_CREATE_START } from '../actions/create';

const createSessionReducer = (initialState = {}) => (state = initialState, action) => {
  if (action.error) {
    return state;
  }
  switch (action.type) {
    case SESSION_CREATE_START:
      return {
        ...state,
        isCreating: true
      };
    case SESSION_CREATE_FINISH:
      return {
        ...state,
        isCreating: false,
        session: action.payload
      };
  }
  return state;
};

export default createSessionReducer;
