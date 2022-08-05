import { StyledAttribute } from "../styles/Attribute.styled";
import HorizRules from "./HorizRules";

function Attribute({ scale }) {
  return (
    <StyledAttribute>
      <p>Temperament: </p>
      {scale === 'bars' ? <HorizRules /> : 'Alert, Agile, Energetic, Demanding, Intelligent'}
    </StyledAttribute>
  )
}

export default Attribute;