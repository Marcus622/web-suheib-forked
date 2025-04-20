import { useEffect, useState } from "react";

function TextToggle() {
    const [istSichtbar, setIstSichtbar] = useState(() => {
        const gespeicherterWert = localStorage.getItem("istSichtbar");
        return gespeicherterWert === null ? true : gespeicherterWert === "true";
    });

    useEffect(() => {
        localStorage.setItem("istSichtbar", istSichtbar);
    }, [istSichtbar]);

    return (
        <div style={{ marginBottom: "20px"}}>
            <h2>Text Ein-/Ausblenden</h2>
            <button onClick={() => setIstSichtbar(!istSichtbar)}>
                {istSichtbar ? "Verstecken" : "Anzeigen"}
            </button>

            {/* Bedingtes Rendern */}
            {istSichtbar && (
                <p style={{ marginTop: "10px"}}>
                    Hallo ich bin gerade sichtbar. Klick den Button, um mich verschwinden zu lassen.
                </p>
            )}
        </div>
    )
}

export default TextToggle;