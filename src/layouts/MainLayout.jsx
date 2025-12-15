import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "@/components/main/Sidebar";
import { AddCircleOutlineOutlined, AddCircleOutlineRounded, SubjectOutlined } from "@mui/icons-material";
import Navbar from "@/components/main/Navbar";

const sidebarWidth = 240;

const MainLayout = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
        text: 'Products',
        icon: <AddCircleOutlineOutlined color='secondary' />,
        path: '/products'
    },
    {
      text: 'Orders',
      icon: <AddCircleOutlineRounded color='primary' />,
      path: '/orders'
    }
  ];

  const onClickItem = (itemPath) => {
    navigate(itemPath);
  };

  return (
    <Box sx={{ display: "flex", m: 0 }}>
      {/* Navbar */}
      <Navbar />

      {/* Left Drawyer */}
      <Sidebar
        width={sidebarWidth}
        menuItems={menuItems}
        onClickItem={onClickItem}
      />

      <Box
        component="main"
        sx={{ width: `calc(100% - ${sidebarWidth}px)`, height: "93vh" }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
