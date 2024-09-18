import { Action, State } from '../interface/User';

const authReducer = (authState: State, action: Action) => {
  switch (action.type) {
    case 'GET_AUTH': {
      return {
        ...authState,
        auths: action.payload
      };
    }
    case 'DELETE_AUTH': {
      return {
        ...authState,
        auths: authState.auths.filter((item) => item._id !== action.payload)
      };
    }
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
