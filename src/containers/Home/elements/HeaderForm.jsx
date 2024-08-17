import React, { useState } from "react";
import FormWrapper from "../../../components/Form/FormWrapper";

const categories = [
  "CSPM Executive Dashboard",
  "CWPP Dashboard",
  "Registry Scan",
];

const HeaderForm = ({ onAddWidget, onClose }) => {
  const [category, setCategory] = useState(categories[0]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWidget({ category, title, text });
    onClose();
  };
  return (
    <FormWrapper onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="select-container">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Widget Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Widget Text</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-buttons">
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Confirm
          </button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default HeaderForm;
