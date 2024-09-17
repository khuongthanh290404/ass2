import { Outlet } from 'react-router-dom';
import { Col, Row } from 'antd';
import SideBar from './SideBar';

const LayoutAdmin = () => {
  return (
    <Row>
      <Col span={6}>
        <SideBar />
      </Col>
      <Col span={18}>
        <div className="">
          <Outlet />
        </div>
      </Col>
    </Row>
  );
};

export default LayoutAdmin;
