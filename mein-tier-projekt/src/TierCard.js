// TierCard.js
function TierCard({ name, art, alter, bild }) {
    return (
      <div style={{
        border: "2px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        width: "250px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
      }}>
        <img src={bild} alt={name} style={{ width: "100%", borderRadius: "10px" }} />
        <h3>{name}</h3>
        <p><strong>Art:</strong> {art}</p>
        <p><strong>Alter:</strong> {alter} Jahre</p>
      </div>
    );
  }
  
  // export default TierCard;
  