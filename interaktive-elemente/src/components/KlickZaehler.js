import React, { useEffect, useState } from "react";

function KlickZaehler() {
  const [clickCount, setClickCount] = useState(() => {
    const gespeicherterClickCount = localStorage.getItem("clickCount");
    return gespeicherterClickCount !== null ? Number(gespeicherterClickCount) : 0;
  });

  // Beim ersten Laden aus dem localStore den Klickzähler lesen

  useEffect(() => {
    localStorage.setItem("clickCount", clickCount);
    }, [clickCount]
   );

  

  // Klickzähler erhöhen

  const incrementClickCount = () => {
    setClickCount(prev => {
      const neuerWert = prev + 1;
      
      return neuerWert;
  });
}

  return (
    <div style={{ padding: "25px", fontFamily: "Arial" }}>
      <h2>Klickzähler: {clickCount}</h2>
      <button onClick={incrementClickCount}>Klick mich</button>
    </div>
  );
}

export default KlickZaehler;