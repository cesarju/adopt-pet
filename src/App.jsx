import "./App.css";
import { PetList } from "./components/PetList";
import petsData from "../pets.json";

function App() {
  const handleAdopt = (id) => {
    petsData.map((pet) => {
      if (pet.id === id) {
        pet.adopted = !pet.adopted;
        console.log(pet.adopted);
      }
    });
  };

  return (
    <div className="App">
      <h1>Adopt a Pet</h1>
      <PetList pets={petsData} onAdopt={handleAdopt} />
    </div>
  );
}

export default App;
