import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ background: "beige", height: "100vh" }}>
      <Layout style={{ background: "tomato", height: "100%" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ position: "fixed", height: "100%" }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 12",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "pink",
              width: "100%",
              position: "fixed",
              marginLeft: collapsed ? 80 : 200,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              marginTop: "64px",
              padding: 24,
              minHeight: 2000,
              background: "lightgray",
              marginLeft: collapsed ? 80 : 200,
            }}
          >
            <div style={{ background: "white", height: "100%" }}>card</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
