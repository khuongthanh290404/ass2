import { useContext } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, Select } from 'antd';
import { ProductContext } from '../../../context/ProductContext';
import { CategoryContext } from '../../../context/CategoryContext';
import { Products } from '../../../interface/Product';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Add = () => {
  const { create } = useContext(ProductContext);

  const { state } = useContext(CategoryContext);
  const navigate = useNavigate();

  const onFinish: FormProps<Products>['onFinish'] = async (values) => {
    try {
      if (values) {
        create(values);
        toast.success('Thêm sản phẩm thành công');
        navigate('/admin/products');
      } else {
        toast.error('Thêm sản phẩm không thành công');
      }
    } catch (error) {
      console.error(error);
      toast.error('Lỗi');
    }
  };

  const onFinishFailed: FormProps<Products>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="">
      <h3 className="text-center py-3 font-semibold text-2xl">
        Create Product
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
        <Form.Item<Products>
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input your title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<Products>
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input your price!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<Products>
          label="Thumbnail"
          name="thumbnail"
          rules={[{ required: true, message: 'Please input your thumbnail!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<Products>
          label="Description"
          name="description"
          rules={[{ required: false, message: 'Please input your thumbnail!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: 'Please input category!' }]}
        >
          <Select>
            {state.categorys?.map((category) => (
              <Select.Option key={category._id} value={category._id}>
                {category.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          <Link
            className="text-red-500 font-semibold pl-2"
            to={'/admin/products'}
          >
            List
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Add;
