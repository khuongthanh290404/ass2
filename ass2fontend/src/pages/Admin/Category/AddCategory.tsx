import { useContext } from 'react';
import { CategoryContext } from '../../../context/CategoryContext';
import { Button, Form, Input } from 'antd';
import type { FormProps } from 'antd';
import { Link } from 'react-router-dom';
import { Categorys } from '../../../interface/Category';
import { toast } from 'react-toastify';

const AddCategory = () => {
  const { createCategory } = useContext(CategoryContext);
  const onFinish: FormProps<Categorys>['onFinish'] = async (values) => {
    try {
      if (values) {
        createCategory(values);
      }
    } catch (error) {
      console.error(error);
      toast.error('Lỗi');
    }
  };

  const onFinishFailed: FormProps<Categorys>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="">
      <h3 className="text-center py-3 font-semibold text-2xl">
        Create Category
      </h3>
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
        <Form.Item<Categorys>
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input your title!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          <Link
            className="text-red-500 font-semibold pl-2"
            to={'/admin/categories'}
          >
            List
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCategory;
