import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { Users } from '../../../interface/User';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const AdminUser = () => {
  const { authState, deleteAuth } = useContext(AuthContext);
  const columns: TableProps<Users>['columns'] = [
    {
      title: 'Id',
      dataIndex: '_id',
      key: '_id',
      render: (_id) => <a>#{_id.slice(0, 10).toUpperCase()}</a>
    },
    {
      title: 'Name',
      dataIndex: 'username',
      key: 'username',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },

    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => deleteAuth(record._id!)}
            className="text-white border bg-red-500 py-1 px-4 rounded font-semibold"
          >
            Delete
          </button>
        </Space>
      )
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={authState.auths.map((auth) => ({
        ...auth,
        key: auth._id
      }))}
    />
  );
};

export default AdminUser;
