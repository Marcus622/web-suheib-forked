import './App.css';
import Titel from './Titel';
import Listing from './Listing';
// import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';



function App() {

const animals = [
  {Id: 1, Name: "Burschi", Alter: "5", Art: "Katzenhai", Diagnose: "Schuppen", image: "https://th.bing.com/th/id/OIP.V-_SlewCkGYDczwAxNZb5QHaFj?rs=1&pid=ImgDetMain" },
  {Id: 2, Name: "Bello", Alter: "3", Art: "Hund", Diagnose: "Flöhe", image: "https://placedog.net/300/200?id=1" },
  {Id: 3, Name: "Hoppel", Alter: "3", Art: "Kaninchen", Diagnose: "Löffeljucken", image: "https://th.bing.com/th/id/OIP.ftvqxe98FQfLaTPP0PatnQHaE8?rs=1&pid=ImgDetMain" },
  {Id: 4, Name: "Stürzer", Alter: "5", Art: "Gepard", Diagnose: "Stolperitis", image: "https://img.welt.de/img/vermischtes/mobile148991882/0932508457-ci102l-w1024/Comedy-Wildlife-Photography-Awards-3.jpg" },

]

  return (
    <div><Titel />
    <Navbar />
    <div className="animalContainer">
      
      {animals.map((animal) => 
      <Listing key={animal.Id} Name={animal.Name} Alter={animal.Alter} Art={animal.Art} Diagnose={animal.Diagnose} image={animal.image}></Listing>
      )}

      </div >
      </div>
  );
}


export default App;
 




