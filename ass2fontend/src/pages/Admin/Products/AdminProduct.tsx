import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './../../../context/ProductContext';
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { Products } from '../../../interface/Product';

const Admin = () => {
  const { state, removeProduct } = useContext(ProductContext);
  const columns: TableProps<Products>['columns'] = [
    {
      title: 'Id',
      dataIndex: '_id',
      key: '_id'
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Image',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: (thumbnail) => <img className="size-20" src={thumbnail} alt="" />
    },
    {
      title: 'Category',
      dataIndex: 'categoryId',
      key: 'categoryId',
      render: (categoryId) => categoryId?.title || '-'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button className="text-white border bg-blue-500 py-1 px-4 rounded font-semibold">
            Edit
          </button>
          <button
            onClick={() => removeProduct(record._id!)}
            className="text-white border bg-red-500 py-1 px-4 rounded font-semibold"
          >
            Delete
          </button>
        </Space>
      )
    }
  ];
  return (
    <div>
      <div className="py-4">
        <Link
          to="/admin/products/add"
          className="text-white font-semibold py-1 px-3 bg-lime-500 text-center inline-block rounded-lg shadow-md hover:bg-gradient-to-r from-lime-500 to-lime-600 transition-colors duration-300"
        >
          Add Product
        </Link>
      </div>
      <Table columns={columns} dataSource={state.products} />
    </div>
  );
};

export default Admin;
