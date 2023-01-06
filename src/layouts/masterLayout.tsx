import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import Search from "antd/lib/input/Search";
import React from "react";
import { Col, Row } from "antd";
import { menuTN, menuKNM } from "../mockdata/menu-lo-trinh";

const { Header, Content, Sider } = Layout;

const items1 = [
  { label: "TRANG CHỦ", key: "item-1" },
  { label: "GIỚI THIỆU", key: "item-2" },
  { label: "LIÊN HỆ", key: "item-3" },
];
interface IMasterLayoutProps {
  children: React.ReactNode;
}
const MasterLayout: React.FC<IMasterLayoutProps> = ({ children }) => (
  <Layout>
    <Header className="header justify-between bg-white">
      {/* <div className="top-header grid-cols-none"></div> */}
      <div className="logo">
        <a href="">
          <h2 className="text-3xl	font-black">Thao.JP</h2>
        </a>
      </div>
      <div className="search">
        <Search placeholder="input search text" style={{ width: 200 }} />
      </div>
      <Menu
        // theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
    <Layout>
      <Row>
        <Col span={24}>
          {/* <div className="slider">
            <div className="image-slider">
              <img src="image/japan-culture.webp" alt="" />
            </div>
          </div> */}
        </Col>
      </Row>
    </Layout>
    <Layout className="my-8 mx-2">
      <Sider width={336} className="site-layout-background bg-white">
        <div className="title-menu">
          <h2 className={"text-[21px] p-[5px] font-bold"}>Tiếng Nhật</h2>
        </div>
        <div className="menu-tieng-nhat">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
            items={menuTN}
          />
        </div>
        <div className="title-menu">
          <h2 className={"text-[21px] p-[5px] font-bold"}>Kỹ năng mềm</h2>
        </div>
        <div className="menu-lo-trinh">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={menuKNM}
          />
        </div>
      </Sider>
      <Layout className="bg-white ml-[20px]">
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 20,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default MasterLayout;
