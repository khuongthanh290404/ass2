import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../../axios';
import { CategoryContext } from '../../../context/CategoryContext';
import { Categorys } from '../../../interface/Category';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { toast } from 'react-toastify';

const EditCategory = () => {
  const { updateCategory } = useContext(CategoryContext);
  const { id } = useParams();
  const [form] = Form.useForm();

  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await api.get(`/categories/${id}`);
        form.setFieldsValue(data.data);
      })();
    }
  }, [id, form]);
  const onFinish: FormProps<Categorys>['onFinish'] = async (values) => {
    try {
      if (values) {
        updateCategory(values, id);
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
        Update Category
      </h3>
      <Form
        form={form}
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
            Update
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

export default EditCategory;
