// import { Modal } from "../InputField/Modal/component";
import { Input } from "../InputField";
import { StyledModalReal } from "./style";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../App";

function ModalReal() {
  const { isModalRealOpen, setIsModalRealOpen, setIsModalOpen } = useContext(UserContext);

  function handleClick() {
    setIsModalRealOpen(false);
    setIsModalOpen(false);
  }

  return (
    <StyledModalReal isModalRealOpen={isModalRealOpen}>
      <div className="modal-background"></div>
      <div className="modal">
        <header>
          <FaTimes onClick={handleClick} />
        </header>
        <div className="clearfix"></div>
        <Input className="modal-input" id="modal-input" />
      </div>
    </StyledModalReal>
  );
}

export { ModalReal };
