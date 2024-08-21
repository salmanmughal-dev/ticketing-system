"use client";
import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Sider } = Layout;

type SideBarProps = {
  selectedKey: string;
};

const links = [
  { key: "1", path: "/dashboard", label: "tickets" },
  { key: "2", path: "/project", label: "projects" },
  { key: "3", path: "/settings", label: "settings" },
];
const items = [
  <UserOutlined key={"1"} />,
  <VideoCameraOutlined key={"2"} />,
  <UploadOutlined key={"3"} />,
].map((item, index) => ({
  key: links[index].key,
  icon: <Link href={links[index].path}>{item}</Link>,
  label: links[index].label,
}));

const SideBar = ({ selectedKey }: SideBarProps) => {
  const [defaultKey, setDefaultKey] = useState<string>("1");

  useEffect(() => {
    if (selectedKey) setDefaultKey(selectedKey);
  }, [selectedKey]);

  return (
    <Sider collapsed={true} className="!bg-purple pt-[100px]">
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        className="!bg-purple"
        selectedKeys={[`${defaultKey}`]}
        items={items}
      />
    </Sider>
  );
};

export default SideBar;
