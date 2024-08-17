import React from "react";
import { InputBase, InputAdornment, Avatar } from "@mui/material";
import { Search } from "@mui/icons-material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.css";

const Navbar = ({ handleSearchChange, searchTerm }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>
          Home &gt; <span className="dashboard-v2">Dashboard V2</span>
        </span>
      </div>
      <div className="navbar-right">
        <InputBase
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search anything..."
          className="search-box"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
        <KeyboardArrowDownIcon />
        <NotificationsActiveIcon className="notification-icon" />
        <Avatar sx={{ bgcolor: "#b5babf", width: '30px', height: '30px' }}>A</Avatar>
        <h4>Ayesha</h4>
      </div>
    </nav>
  );
};

export default Navbar;
