import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { toast } from 'react-toastify';
import api from '../axios';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
  type FieldType = {
    username?: string;
    email?: string;
    password?: string;
    remember?: string;
  };
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const res = await api.post('/register', values);
      console.log(res);

      if (!res) {
        toast.error('Tài khoản hoặc mật khẩu không đúng');
      }

      toast.success('Đăng kí thành công', {
        autoClose: 300
      });

      navigate('/login');
    } catch (error) {
      console.log('Error:', error);
      toast.error('Lỗi Api');
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md">
        <h3 className="text-center py-3 font-semibold text-2xl">Register</h3>
        <Form
          name="basic"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 1000 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your userName!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Select"
            name="Select"
            rules={[{ required: true, message: 'Please input!' }]}
          >
            <Select />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 40 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            <Link className="text-red-500 font-semibold pl-2" to={'/login'}>
              Login
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
