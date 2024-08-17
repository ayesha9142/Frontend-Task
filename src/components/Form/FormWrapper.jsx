import React from "react";

import CloseIcon from "@mui/icons-material/Close";

const FormWrapper = ({ children, onClose }) => {
  return (
    <div className="widget-form">
      <div className="widget-form-header">
        <h2>Add New Widget</h2>
        <CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} />
      </div>
      <div className="widget-form-content">{children}</div>
    </div>
  );
};

export default FormWrapper;
