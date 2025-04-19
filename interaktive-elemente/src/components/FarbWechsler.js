import { useState } from "react";
function FarbWechsler() {
    // Zustand für die Hintergrundfarbe: true = rot, false = grün
    const [istRot, setIstRot] = useState(true);

    // Dynamischer Stile
    const stil = {
        backgroundColor: istRot ? "crimson" : "seagreen",
        padding: "20px",
        color: "white",
        borderRadius: "10px",
        marginBottom: "20px"
    };

    return (
        <div>
            <h2>Farbwechsler</h2>
            <div style={stil}>
                Hintergrundfarbe wechseln.
            </div>
            <button onClick={() => setIstRot(!istRot)}>
                Farbe wechseln
            </button>
        </div>
    );
}

export default FarbWechsler