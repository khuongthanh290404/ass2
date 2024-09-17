import { createContext, ReactNode, useReducer } from 'react';
import { State, Users } from '../interface/User';
import authReducer from '../reducers/AuthReducer';
import api from '../axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type AuthContext = {
  authState: State;
  login: (dataLogin: Users) => void;
  logOut: () => void;
};
type ChildrenProps = {
  children: ReactNode;
};

const initialState: State = {
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user') || '{}')
};

export const AuthContext = createContext<AuthContext>({} as AuthContext);
const AuthProvider = ({ children }: ChildrenProps) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();
  const login = async (dataLogin: Users) => {
    try {
      const res = await api.post('/login', dataLogin);

      if (!res) {
        toast.error('Tài khoản hoặc mật khẩu không đúng');
      }
      dispatch({
        type: 'SET_AUTH',
        payload: { token: res.data.accessToken, user: res.data.user }
      });
      if (res.data.user.role === 'admin') {
        navigate('/admin/products');
      } else {
        navigate('/');
      }
      toast.success('Đăng nhập thành công', {
        autoClose: 300
      });
    } catch (error) {
      console.log('Error:', error);
      toast.error('Lỗi Api');
    }
  };
  const logOut = () => {
    dispatch({ type: 'LOG_OUT' });
    navigate('/login');
  };
  return (
    <AuthContext.Provider value={{ authState, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
