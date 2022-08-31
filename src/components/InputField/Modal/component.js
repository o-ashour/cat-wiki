import { StyledModal } from "./style";
import { Link } from "react-router-dom";

function Modal({ breedListFiltered, onClick, arrowVar }) {
  return (
    <StyledModal>
      {breedListFiltered.breedObjects.map((breed, idx) => {
        if (arrowVar.value === idx + 1 && arrowVar.isChanged) {
          return (
            <Link
              key={idx}
              to="/details"
              className="modal-item"
              id="focused-link"
            >
              <li id={breedListFiltered.breedIds[idx]} onClick={onClick}>
                {breed.name}
              </li>
            </Link>
          );
        } else {
          return (
            <Link key={idx} to="/details" className="modal-item">
              <li id={breedListFiltered.breedIds[idx]} onClick={onClick}>
                {breed.name}
              </li>
            </Link>
          );
        }
      })}
    </StyledModal>
  );
}

export { Modal };