import { StyledModal } from "./style";
import { Link } from "react-router-dom";

function Modal({ breedListFiltered, onClick, arrowVar }) {
  return (
    <StyledModal id="modal">
      {breedListFiltered.breedObjects.map((breed, idx) => {
        if (idx < 5) {
          if (arrowVar.value === idx && arrowVar.isChanged) {
            return (
              <Link key={idx} to="/details" id="focused-link">
                <li id={breedListFiltered.breedIds[idx]} onClick={onClick}>
                  {breed.name}
                </li>
              </Link>
            );
          } else {
            return (
              <Link key={idx} to="/details">
                <li id={breedListFiltered.breedIds[idx]} onClick={onClick}>
                  {breed.name}
                </li>
              </Link>
            );
          }
        } else {
          return null;
        }
      })}
    </StyledModal>
  );
}

export { Modal };
