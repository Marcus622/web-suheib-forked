import { useState } from "react";

function LiveTextVorschau() {
    const [text, setText] = useState("");

    // Handler-Funktion für Eingabeänderung
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div style={{marginBottom: "20px"}}>
            <h2>Live Text-Vorschau</h2>
            <input
            type="text"
            placeholder="Gib etwas ein..."
            onChange={handleChange}
            style={{padding: "8px", width: "100%", maxWidth: "400px", marginBottom: "10px"}}
            />
            <p>Du hast geschrieben: <strong>{text}</strong></p>
        </div>
    );
}

export default LiveTextVorschau