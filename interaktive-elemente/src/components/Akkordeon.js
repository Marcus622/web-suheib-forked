import React, {useState} from "react";

function Akkordeon() {
    const [istOffen, setIstOffen] = useState(false);

    const toggle = () => {
        setIstOffen(prev => !prev);
    };


return (
    <div style={{border: "1px solid #ccc", borderRadius: "8px", marginBottom: "20px"}}>
        <div
        onClick={toggle}
        style={{
            padding: "10px 15px",
            backgroundColor: "#f0f0f0",
            cursor: "pointer",
            fontWeight: "bold"
        }}
    >
        {istOffen ? "⬆️ Weniger anzeigen" : "⬇️ Mehr anzeigen"}
        </div>
        {istOffen && (
            <div style={{ padding: "15px", backgroundColor: "#fafafa"}}>
            <p>Dies ist ein ein-und ausklappberer Inhalt!</p>
            <p>Du kannst hier beliebigen Inhalt unterbringen - Text, Bilder, Formulare, usw.</p>
            </div>
        )}
        </div>
);
}

export default Akkordeon;