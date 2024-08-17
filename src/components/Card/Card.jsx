import React from "react";
import "./Card.css";
import CloseIcon from "@mui/icons-material/Close";

const Card = ({ title, children, handleClose }) => {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 className="card-title">{title}</h2>
        {title && <CloseIcon onClick={handleClose} />}
      </div>
      {children}
    </div>
  );
};

export default Card;
