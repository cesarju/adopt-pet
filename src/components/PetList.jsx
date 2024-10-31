/* eslint-disable react/prop-types */
import { PetItem } from "./PetsItem";

const PetList = ({ pets, onAdopt }) => {
  return (
    <div className="card-container">
      {pets.map((pet) => (
        <PetItem key={pet.id} pet={pet} onAdopt={onAdopt} />
      ))}
    </div>
  );
};

export { PetList };
