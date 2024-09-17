import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
const Login = () => {
  type FieldType = {
    _id: string;
    userName?: string;
    email?: string;
    password?: string;
    remember?: string;
    role?: string;
  };
  const { login } = useContext(AuthContext);

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    if (values) {
      login(values);
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
        <h3 className="text-center py-3 font-semibold text-2xl">Login</h3>
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

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 40 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <Link className="text-red-500 font-medium pl-2" to={'/register'}>
              Register
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
