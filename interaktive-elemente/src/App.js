import './App.css';
import KlickZaehler from './components/KlickZaehler';
import FarbWechsler from './components/FarbWechsler';
import TextToggle from './components/TextToggle';
import LiveTextVorschau from './components/LiveTextVorschau';


function App() {

  return (
    <div style={{ padding: "25px", fontFamily: "Arial" }}>
      <h1>Interaktive Elemente</h1>
     <KlickZaehler />
     <hr/>
     <FarbWechsler />
     <hr/>
     <TextToggle />
     <hr/>
     <LiveTextVorschau />
    </div>
  );
}

export default App;
