import React, { useEffect, useState } from 'react';

function KurioseFakten() {
    const [fakt, setFakt] = useState("")
    const [loading, setLoading] = useState(false);

    const ladeFakt = () => {
        setLoading(true);
        fetch("https://uselessfacts.jsph.pl/random.json?language=de")
        .then((res) => res.json())
        .then((data) => {
            setFakt(data.text);
            setLoading(false);
        })
        .catch(() => {
            setFakt("Problem beim Laden.");
            setLoading(false);
        });
    };

    useEffect(() => {
        ladeFakt();
    }, []);


  return (
    <div style={{ margineTop: "30px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px"}}>
        <h2>Kurioser Fakt</h2>
        <p>{loading ? "Lade..." : fakt}</p>
        <button onClick={ladeFakt} style={{marginTop: "10px"}}>
        🔄 Neuen Fakt laden
        </button>      
    </div>
  );
}

export default KurioseFakten
