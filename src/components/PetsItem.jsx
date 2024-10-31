/* eslint-disable react/prop-types */

const PetItem = ({ pet, onAdopt }) => {
  return (
    <div className="card">
      <img src={pet.img} alt={pet.name} />
      <h3>Nombre: {pet.name}</h3>
      <p>Especie: {pet.species}</p>
      <button
        className={`adopt-button ${pet.adopted ? "adopted-button" : ""}`}
        onClick={() => onAdopt(pet.id)}
      >
        {pet.adopted ? "Adoptado" : "Adoptar"}
      </button>
    </div>
  );
};

export { PetItem };
