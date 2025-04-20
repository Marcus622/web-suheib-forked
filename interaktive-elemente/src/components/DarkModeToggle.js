

function DarkModeToggle({ onToggle, isDark}) {
    const buttonStyle = {
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "10px 15px",
        fontSize: "14px",
        backgroundColor: isDark ? "#444" : "#eee",
        color: isDark ? "#eee" : "#444",
        border: "none",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        zIndex: 1000,
        transition: "all 0.3s ease"
    };

    return (
        <button style={buttonStyle} onClick={onToggle}>
            {isDark ? "☀️ Hellmodus" : "🌙 Darkmode"}
        </button>
    );
}

export default DarkModeToggle;