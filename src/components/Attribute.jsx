import { StyledAttribute } from "./styles/Attribute.styled";
import HorizRules from "./HorizRules";

function Attribute({ scale }) {
  return (
    <StyledAttribute>
      <span>Temperament: </span>
      {scale === 'bars' ? <HorizRules /> : <span>Alert, Agile, Energetic, Demanding, Intelligent</span>}
    </StyledAttribute>
  )
}

export default Attribute;