import { Input } from "../InputField";
import { StyledModal } from "./style";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../App";

function Modal() {
  const { isModalOpen, setIsModalOpen, setIsInResultsOpen } =
    useContext(UserContext);

  function handleClick() {
    setIsModalOpen(false);
    setIsInResultsOpen(false);
  }
  // id="modal-input" 
  return (
    <StyledModal isModalOpen={isModalOpen}>
      <div className="modal-background"></div>
      <div className="modal">
        <header>
          <FaTimes onClick={handleClick} />
        </header>
        <div className="clearfix"></div>
        <Input id='modal-input' />
      </div>
    </StyledModal>
  );
}

export { Modal };
