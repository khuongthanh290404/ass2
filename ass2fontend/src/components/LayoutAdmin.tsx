import { Outlet } from 'react-router-dom';
import { Col, Row } from 'antd';
import SideBar from './SideBar';

const LayoutAdmin = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <SideBar />
      </Col>
      <Col span={18}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default LayoutAdmin;
