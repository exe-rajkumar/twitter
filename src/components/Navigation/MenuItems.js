// MenuItems.js
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

export const MenuItems = [
  {
    title: "Home",
    url: "/dashboard/home",
    icon: <HomeOutlinedIcon />,
    cName: "nav-links",
  },
  {
    title: "Explore",
    url: "/dashboard/explore",
    icon: <ExploreOutlinedIcon />,
    cName: "nav-links",
  },
  {
    title: "Notification",
    url: "/dashboard/notification",
    icon: <NotificationsOutlinedIcon />,
    cName: "nav-links",
  },
  {
    title: "Messages",
    url: "/dashboard/message",
    icon: <MessageOutlinedIcon />,
    cName: "nav-links",
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: <Person2OutlinedIcon />,
    cName: "nav-links",
  },
];
