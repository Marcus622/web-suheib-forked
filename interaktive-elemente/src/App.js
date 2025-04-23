
import React, { useState, useEffect } from 'react';
import KlickZaehler from './components/KlickZaehler';
import FarbWechsler from './components/FarbWechsler';
import TextToggle from './components/TextToggle';
import LiveTextVorschau from './components/LiveTextVorschau';
import DarkModeToggle from './components/DarkModeToggle';
import ResetButton from './components/ResetButton';
import Akkordeon from './components/Akkordeon';
import KurioseFakten from './components/KurioseFakten';




function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const gespeicherterModus = localStorage.getItem("darkMode");
    return gespeicherterModus === "true";
  });

  // Beim ersten Laden aus dem localStorage lesen
  useEffect(() => {
    const gespeicherterDarkMode = localStorage.getItem("darkMode");

    if (gespeicherterDarkMode === "true") {
      setIsDarkMode(true);
    }
  }, []);

  // Beim ändern des DM in localStorage speichern

useEffect(() => {
  localStorage.setItem("darkMode", isDarkMode);
}, [isDarkMode]);


  // Umschaltfunktion
  const toggleDarkMode = () => {
    const neuerModus = !isDarkMode;
    setIsDarkMode(neuerModus);
    localStorage.setItem("darkMode", neuerModus);
  };

  const appStyle = {
    backgroundColor: isDarkMode ? "#222" : "#f5f5f5",
    color: isDarkMode ? "#f5f5f5" : "#222",
    padding: "25px",
    fontFamily: "Arial",
    minHeight: "100vh",
    transition: "all 0.3s ease"
  };

  return (
    <div style={appStyle}>
      <h1>Interaktive Elemente</h1>
      <DarkModeToggle onToggle={toggleDarkMode} isDark={isDarkMode} />
      <hr/>
      <KurioseFakten />
      <hr/>
      <KlickZaehler />
      <hr/>
      <Akkordeon />
      <hr />
      <FarbWechsler />
      <hr />
      <TextToggle />
      <hr />
      <LiveTextVorschau /> <ResetButton />
      
    </div>
  );
}

export default App;
