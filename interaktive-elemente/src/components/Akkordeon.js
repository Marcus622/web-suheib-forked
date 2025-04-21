import React, { useState } from "react";

function Akkordeon({ isDarkMode }) {
  const [istOffen, setIstOffen] = useState(false);

  const toggle = () => {
    setIstOffen(prev => !prev);
  };

  const headerStyle = {
    padding: "10px 15px",
    backgroundColor: isDarkMode ? "#444" : "#f0f0f0",
    color: isDarkMode ? "#fff" : "#000",
    cursor: "pointer",
    fontWeight: "bold"
  };

  const contentStyle = {
    padding: "15px",
    backgroundColor: isDarkMode ? "#555" : "#fafafa",
    color: isDarkMode ? "#eee" : "#000"
  };

  const containerStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "20px",
    backgroundColor: isDarkMode ? "#333" : "#fff",
    transition: "all 0.3s ease"
  };

  return (
    <div style={containerStyle}>
      <div onClick={toggle} style={headerStyle}>
        {istOffen ? "⬆️ Weniger anzeigen" : "⬇️ Mehr anzeigen"}
      </div>
      {istOffen && (
        <div style={contentStyle}>
          <p>Dies ist ein ein- und ausklappbarer Inhalt!</p>
          <p>Du kannst hier beliebigen Inhalt unterbringen – Text, Bilder, Formulare, usw.</p>
        </div>
      )}
    </div>
  );
}

export default Akkordeon;
