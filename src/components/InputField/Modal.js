import BreedItem from "./BreedItem";

function Modal({ breedList, onClick }) {
  return (
    <ul>
      {breedList.map((breed, idx) => {
        return (
          <BreedItem key={idx} breed={breed} id={idx} onClick={onClick} />
        )
      })}
    </ul>
  )
}

export default Modal