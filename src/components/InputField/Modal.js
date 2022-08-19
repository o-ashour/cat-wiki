import BreedItem from "./BreedItem";
import { StyledModal } from "./Modal.styled";

function Modal({ breedList, onClick, id }) {
  return (
    <StyledModal id={id}>
      {breedList.map((breed, idx) => {
        return (
          <BreedItem key={idx} breed={breed} id={idx} onClick={onClick} />
        )
      })}
    </StyledModal>
  )
}

export default Modal;