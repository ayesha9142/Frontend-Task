import React, { useState } from "react";

import Checkbox from "@mui/material/Checkbox";

import Form from "./Form";
import FormWrapper from "./FormWrapper";
import "./WidgetForm.css";

const WidgetForm = ({
  onSubmit,
  onClose,
  sections,
  setCategory,
  category,
  handleRemove,
  cards,
}) => {
  const [removedWidgets, setRemovedWidgets] = useState([]);

  const initialCheckedState =
    sections
      .find((section) => section.title === category)
      ?.initialCards.map(() => true) || [];

  const [checkedState, setCheckedState] = useState(initialCheckedState);

  const handleCheckChange = (index, card) => {
    const updatedCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );

    setCheckedState(updatedCheckedState);

    if (updatedCheckedState[index]) {
      const removedWidget = removedWidgets.find(
        (widget) => widget.title === card.title
      );

      if (removedWidget) {
        onSubmit({
          category,
          title: removedWidget.title,
          content: removedWidget.content,
        });
        setRemovedWidgets(
          removedWidgets.filter(
            (w) =>
              w.title !== removedWidget.title ||
              w.content !== removedWidget.content
          )
        );
      }
    } else {
      handleRemove(card.title);
      setRemovedWidgets([...removedWidgets, card]);
    }
  };

  const handleCategory = (categoryTitle) => {
    setCategory(categoryTitle);
    const newCategoryCards =
      sections.find((section) => section.title === categoryTitle)
        ?.initialCards || [];
    setCheckedState(new Array(newCategoryCards.length).fill(true));
  };

  const currentCategoryCards =
    sections.find((section) => section.title === category)?.initialCards || [];

  const uniqueCards = [...currentCategoryCards, ...cards].reduce(
    (acc, card) => {
      if (!acc.find((item) => item.title === card.title)) {
        acc.push(card);
      }
      return acc;
    },
    []
  );

  return (
    <FormWrapper onClose={onClose}>
        <Form onSubmit={onSubmit} onClose={onClose} />
        <div className="personalize">
          <p>Personalize your dashboard by adding the following widgets.</p>

          <div className="category-tabs">
            {sections.map((section, index) => (
              <div
                key={index}
                className={category === section.title ? "active-tab" : "c-tab"}
                onClick={category === section.title ? () => handleCategory(section.title) : () => {}}
              >
                {section.title}
              </div>
            ))}
          </div>
          {uniqueCards.map((card, index) => (
            <div key={index}>
              <Checkbox
                checked={checkedState[index]}
                onChange={() => handleCheckChange(index, card)}
              />
              {card.title}
            </div>
          ))}
        </div>
    </FormWrapper>
  );
};

export default WidgetForm;
