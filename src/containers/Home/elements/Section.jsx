import React, { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import { Profit } from "../../../assets/images";
import WidgetForm from "../../../components/Form/WidgetForm";
import Card from "../../../components/Card/Card";
import HeaderButton from "../../../components/Button/CustomButton";
import "./Section.css";

const Section = ({ title, initialCards, sections, searchTerm }) => {
  
  const [category, setCategory] = useState(title);
  const [cards, setCards] = useState(initialCards);
  const [filteredCards, setFilteredCards] = useState(initialCards);
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    setFilteredCards(
      cards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, cards]);

  useEffect(() => {
    setCards(initialCards)
  }, [initialCards])

  const handleAddWidget = (widget) => {
    const newWidget = {
      title: widget.title,
      content: widget.content || <p>{widget.text}</p>,
    };
    setCards([...cards, newWidget]);
    setFormVisible(false);
  };

  const handleRemoveWidget = (title) => {
    const updatedCards = cards.filter((card) => card.title !== title);
    setCards(updatedCards);
  };
  

  return (
    <div className="section">
      <h1 className="section-heading">{title}</h1>
      <div className="card-container">
        {filteredCards.map((card, index) => (
          <Card
            key={card.title + index}
            title={card.title}
            handleClose={() => handleRemoveWidget(card.title)}
          >
            {card.content}
          </Card>
        ))}
        {!searchTerm && <Card>
          <div className="add-widget-btn" onClick={() => setFormVisible(true)}>
            <HeaderButton >
              <AddIcon /> Add Widget
            </HeaderButton>
          </div>
        </Card>}
      </div>
      {isFormVisible && (
        <WidgetForm
          onSubmit={handleAddWidget}
          handleRemove={handleRemoveWidget}
          onClose={() => setFormVisible(false)}
          cards={cards}
          category={category}
          setCategory={setCategory}
          sections={sections}
        />
      )}
    </div>
  );
};

export default Section;

export const NoData = () => {
  return (
    <div className="no-data-container">
      <img src={Profit} alt="" />
      <h1>No Graph data available</h1>
    </div>
  );
};