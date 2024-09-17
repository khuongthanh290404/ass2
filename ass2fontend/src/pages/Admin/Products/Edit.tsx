import { useContext, useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, Select } from 'antd';
import { ProductContext } from '../../../context/ProductContext';
import { CategoryContext } from '../../../context/CategoryContext';
import { Products } from '../../../interface/Product';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../../axios';

const Edit = () => {
  const { updateProduct } = useContext(ProductContext);
  const { id } = useParams();
  const [form] = Form.useForm();

  const { state } = useContext(CategoryContext);

  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await api.get(`/products/${id}`);
        form.setFieldsValue(data);
      })();
    }
  }, [id, form]);
  const onFinish: FormProps<Products>['onFinish'] = async (values) => {
    try {
      if (values) {
        updateProduct(values, id);
      } else {
        toast.error('Cập nhật sản phẩm không thành công');
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
            Update
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

export default Edit;
