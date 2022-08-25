import { StyledModal } from "./style";
import { Link } from "react-router-dom";

function Modal({ breedListFiltered, onClick, id }) {
  return (
    <StyledModal id={id}>
      {breedListFiltered.breedObjects.map((breed, idx) => {
        return (
          <Link to="/details" className="modal-item">
            <li id={breedListFiltered.breedIds[idx]} onClick={onClick}>
              {breed.name}
            </li>
          </Link>
        );
      })}
    </StyledModal>
  );
}

export { Modal };
