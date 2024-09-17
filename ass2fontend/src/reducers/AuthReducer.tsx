import { Action, State } from '../interface/User';

const authReducer = (authState: State, action: Action) => {
  switch (action.type) {
    case 'SET_AUTH': {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...authState,
        token: action.payload.token,
        user: action.payload.user
      };
    }
    case 'LOG_OUT': {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {
        ...authState,
        token: null,
        user: null
      };
    }
    default:
      return authState;
  }
};
export default authReducer;
