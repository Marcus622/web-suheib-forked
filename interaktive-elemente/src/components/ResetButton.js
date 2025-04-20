function ResetButton() {
    const handleReset = () => {
      // Alle localStorage-Einträge löschen
      localStorage.clear();
  
      // Seite neu laden, um Zustand zurückzusetzen
      window.location.reload();
    };
  
    const buttonStyle = {
      marginTop: "40px",
      padding: "10px 15px",
      fontSize: "14px",
      backgroundColor: "#c62828",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
    };
  
    return (
      <button style={buttonStyle} onClick={handleReset}>
        🔄 Alles zurücksetzen
      </button>
    );
  }
  
  export default ResetButton;
  