import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import CachedIcon from "@mui/icons-material/Cached";
import AddIcon from "@mui/icons-material/Add";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import HeaderButton from "../../../components/Button/CustomButton";
import HeaderForm from "./HeaderForm";
import "./Header.css";

const Header = ({ onAddWidget }) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleClose = () => {
    setFormVisible(false);
  };
  return (
    <header className="header">
      <div className="header-left">
        <h1>CNAPP Dashboard</h1>
      </div>
      <div className="header-right">
        <div onClick={() => setFormVisible(true)}>
          <HeaderButton>
            Add Widget <AddIcon />
          </HeaderButton>
        </div>
        <IconBox>
          <CachedIcon />
        </IconBox>
        <IconBox>
          <MoreVert />
        </IconBox>

        <div className="dropdown">
          <WatchLaterIcon className="clock" />
          <h3>Last 2 Days</h3>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      {isFormVisible && (
        <HeaderForm onAddWidget={onAddWidget} onClose={handleClose} />
      )}
    </header>
  );
};

export default Header;

const IconBox = ({ children }) => {
  return <div className="icon-button">{children}</div>;
};
