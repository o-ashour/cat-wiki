import { StyledModal } from "./style";
import { Link } from "react-router-dom";

function Modal({ breedListFiltered, onClick }) {
  return (
    <StyledModal>
      {breedListFiltered.breedObjects.map((breed, idx) => {
        return (
          <Link key={idx} to="/details" className="modal-item">
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
