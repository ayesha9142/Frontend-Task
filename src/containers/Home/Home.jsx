import React, { useEffect, useState } from "react";

import Header from "./elements/Header";
import Section, { NoData } from "./elements/Section";
import Navbar from "../../components/NavBar/Nav";
import DonutChart from "../../components/DonutChart/PieChart";
import ProgressBar from "../../components/Bar/Bar";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sections, setSections] = useState([
    {
      title: "CSPM Executive Dashboard",
      initialCards: [
        { title: "Cloud Accounts", content: <DonutChart /> },
        { title: "Cloud Account Risk Assessment", content: <DonutChart donut2 /> },
      ],
    },
    {
      title: "CWPP Dashboard",
      initialCards: [
        { title: "Top 5 Namespace Specific Alert", content: <NoData /> },
        { title: "Workload Alerts", content: <NoData /> },
      ],
    },
    {
      title: "Registry Scan",
      initialCards: [
        { title: "Image Risk Assessment", content: <ProgressBar /> },
        { title: "Image Security Issues", content: <ProgressBar security /> },
      ],
    },
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
  }, [sections]);

  const handleAddWidget = ({ category, title, text }) => {
    const sectionExists = sections.some(section => section.title === category);
  
    if (!sectionExists) {
      alert('Category not found');
      return;
    }
    const updatedSections = sections.map(section => {
      if (section.title === category) {
        return {
          ...section,
          initialCards: [
            ...section.initialCards,
            { title, content: <p>{text}</p> }
          ]
        };
      }
      return section;
    });
    setSections(updatedSections);
  };
  

  return (
    <div>
      <Navbar handleSearchChange={handleSearchChange} searchTerm={searchTerm} />
      <div className="dashboard-body">
        <Header onAddWidget={handleAddWidget} />
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            initialCards={section.initialCards}
            sections={sections}
            searchTerm={searchTerm}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;