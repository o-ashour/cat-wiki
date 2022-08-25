import BreedItem from "./BreedItem";
import { StyledModal } from "./Modal.styled";

function Modal({ breedListFiltered, onClick, id }) {
  return (
    <StyledModal id={id}>
      {breedListFiltered.breedNames.map((breed, idx) => {
        return (
          <BreedItem key={idx} breed={breed} id={breedListFiltered.breedIds[idx]} onClick={onClick} />
        )
      })}
    </StyledModal>
  )
}

export default Modal;