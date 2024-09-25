import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { State, Users } from '../interface/User';
import authReducer from '../reducers/AuthReducer';
import api from '../axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type AuthContext = {
  authState: State;
  login: (dataLogin: Users) => void;
  logOut: () => void;
  deleteAuth: (id: string) => void;
};
type ChildrenProps = {
  children: ReactNode;
};

const initialState: State = {
  auths: [],
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user') || '{}')
};

export const AuthContext = createContext<AuthContext>({} as AuthContext);
const AuthProvider = ({ children }: ChildrenProps) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get('/auth/user');
        dispatch({ type: 'GET_AUTH', payload: res.data });
      } catch (error) {
        console.log(error);
        toast.error('Lỗi Api');
      }
    })();
  }, []);
  const login = async (dataLogin: Users) => {
    try {
      const res = await api.post('/auth/login', dataLogin);

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
  const deleteAuth = async (id: string) => {
    try {
      if (confirm('Are you sure you want to delete')) {
        const res = await api.delete(`user/${id}`);
        if (!res) {
          toast.error('Xóa thất bại');
          return;
        }
        dispatch({ type: 'DELETE_AUTH', payload: res.data });
      }
    } catch (error) {
      console.log('Error:', error);
      toast.error('Lỗi Api');
    }
  };
  return (
    <AuthContext.Provider value={{ authState, login, logOut, deleteAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
