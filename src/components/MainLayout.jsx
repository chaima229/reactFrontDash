import React, { useState } from 'react';
import { AiOutlineDashboard, AiOutlinePicLeft, AiOutlinePicRight   } from "react-icons/ai";
import { CiUser, CiShoppingCart } from "react-icons/ci";

import { FaBloggerB } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { SiBrandfolder } from "react-icons/si";
import { FaClipboardList } from "react-icons/fa6";
import { IoIosColorFill, IoIosNotifications } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { useNavigate, Outlet, Link } from 'react-router-dom';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">AA</span>
            <span className="lg-logo">ELTIGBA</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'custumers',
              icon: <CiUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <CiShoppingCart className='fs-4' />,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <CiShoppingCart className='fs-4' />,
                  label: 'Add Product',
                },
                {
                  key: 'product-list',
                  icon: <CiShoppingCart className='fs-4' />,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon: <SiBrandfolder  className='fs-4' />,
                  label: 'Brand',
                },
                {
                  key: 'brand-list',
                  icon: <SiBrandfolder  className='fs-4' />,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon: <BiCategory className='fs-4' />,
                  label: 'Category',
                },
                {
                  key: 'list-category',
                  icon: <BiCategory className='fs-4' />,
                  label: 'Category List',
                },
                {
                  key: 'color',
                  icon: <IoIosColorFill className='fs-4' />,
                  label: 'Color',
                },
                {
                  key: 'list-color',
                  icon: <IoIosColorFill className='fs-4' />,
                  label: 'Color List',
                },
              ]
            },
            {
                  key: 'orders',
                  icon: <FaClipboardList className='fs-4' />,
                  label: 'Orders',
            },
            {
                  key: 'blogs',
                  icon: <FaBloggerB className='fs-4' />,
                  label: 'Blogs',
                  children: [
                    {
                      key: 'blog',
                      icon: <ImBlog  className='fs-4' />,
                      label: 'Add Blog',
                    },
                    {
                      key: 'blog-list',
                      icon: <FaClipboardList className='fs-4' />,
                      label: 'Blog List',
                    },
                    {
                      key: 'blog-category',
                      icon: <ImBlog  className='fs-4' />,
                      label: 'Add Blog Category',
                    },
                    {
                      key: 'blog-category-list',
                      icon: <FaClipboardList className='fs-4' />,
                      label: 'Blog Category List',
                    },
                  ]
            },
            {
                  key: 'enquiries',
                  icon: <FaClipboardList className='fs-4' />,
                  label: 'Enquiries',
            },
            
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className='d-flex justify-content-between ps-1 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {/* {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )} */}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcz4lE7FQCPF544vc-fFQSPJNyRtqwNdRzg&usqp=CAU"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Mellouk</h5>
                <p className="mb-0">melloukchaimaa@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
