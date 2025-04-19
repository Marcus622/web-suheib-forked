import {useState } from "react";

function KlickZaehler() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "25px", fontFamily: "Arial" }}>
      <h2>Klickzähler</h2>
      <p>Du hast {count} mal geklickt.</p>
      <button onClick={() => setCount(count + 1)}>Klick mich</button>
    </div>
  );
}

export default KlickZaehler;