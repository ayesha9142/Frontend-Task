import React from "react";
import "./Progress.css";

const ProgressBar = ({ security }) => {
  const riskData = [
    { width: "0%", backgroundColor: "#6E0F09", label: "Critical" },
    { width: "10%", backgroundColor: "#C6281A", label: "High" },
    { width: "60%", backgroundColor: "#EB912F", label: "Medium" },
    { width: "25%", backgroundColor: "#EFC441", label: "Low" },
  ];
  const securityData = [
    { width: "20%", backgroundColor: "#6E0F09", label: "Critical" },
    { width: "20%", backgroundColor: "#C6281A", label: "High" },
    { width: "20%", backgroundColor: "#EB912F", label: "Medium" },
    { width: "20%", backgroundColor: "#EFC441", label: "Low" },
  ];
  const sections = security ? securityData : riskData;
  return (
    <div>
      <p>
        <span className="total-bar">{security ? "10" : "1240"}</span> Total{" "}
        {security ? "Images" : "Vulnaribilities"}
      </p>
      <div className="progress-container">
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              width: section.width,
              backgroundColor: section.backgroundColor,
              height: "100%",
            }}
          ></div>
        ))}
      </div>
      <div className="progress-labels">
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              width: "50%",
              textAlign: "center",
              padding: "5px 0",
              boxSizing: "border-box",
            }}
          >
            <div className="progress-legend">
              <span
                className="label-bar"
                style={{ background: section.backgroundColor }}
              ></span>
              {section.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
