"use client";

import React, { ReactNode, useState } from "react";
import SideBar from "./Sider";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu, Spin } from "antd";
import { Suspense } from "react";

// Input
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

//

const { Header, Content, Sider } = Layout;

export function Grid({
  components,
}: Readonly<{
  components: React.ReactNode;
}>) {
  return (
    <Spin spinning={false} size="large">
      <Layout className="h-[100vh]">
        <SideBar selectedKey="1" />
        <Layout className="bg-secondary">
          <Header className="bg-primary text-textColor text-3xl border-e-8 flex items-center justify-around">
            <p>QUASAR</p>
            <Search
              className="w-1/4 m-3"
              placeholder="Search tickets"
              allowClear
              size="large"
              onSearch={() => console.log("Nothing....")}
            />
            <Avatar
              className="float-right m-2 w-[60px] h-[60px] border-2 border-textColor"
              icon={
                <UserOutlined
                  className="text-3xl"
                  style={{ fontSize: 40, color: "#EBD3F8" }}
                />
              }
            />
          </Header>
          <Content className="bg-primary text-textColor">
            <div className="bg-primary text-textColor">{components}</div>
          </Content>
        </Layout>
      </Layout>
    </Spin>
  );
}
