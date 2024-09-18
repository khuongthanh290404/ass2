import { useContext } from 'react';
import { CategoryContext } from './../../../context/CategoryContext';
import { Link } from 'react-router-dom';
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { Categorys } from '../../../interface/Category';

const AdminCategory = () => {
  const { state, removeCategory } = useContext(CategoryContext);
  const columns: TableProps<Categorys>['columns'] = [
    {
      title: 'Id',
      dataIndex: '_id',
      key: '_id',
      render: (_id) => <a>#{_id.slice(0, 10).toUpperCase()}</a>
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/admin/categories/edit/${record._id}`}>
            <button className="text-white border bg-blue-500 py-1 px-4 rounded font-semibold">
              Edit
            </button>
          </Link>
          <button
            onClick={() => removeCategory(record._id)}
            className="text-white border bg-red-500 py-1 px-4 rounded font-semibold"
          >
            Delete
          </button>
        </Space>
      )
    }
  ];
  return (
    <>
      <div className="py-4">
        <Link
          to="/admin/categories/add"
          className="text-white font-semibold py-1 px-3 bg-lime-500 text-center inline-block rounded-lg shadow-md hover:bg-gradient-to-r from-lime-500 to-lime-600 transition-colors duration-300"
        >
          Add Category
        </Link>
      </div>
      <Table
        columns={columns}
        dataSource={state.categorys.map((category) => ({
          ...category,
          key: category._id
        }))}
      />
    </>
  );
};

export default AdminCategory;
