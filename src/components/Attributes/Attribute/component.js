import { StyledAttribute } from "./style";
import HorizRules from "./HorizRules";

function Attribute(props) {
  return (
    <StyledAttribute score={props.score}>
      <span>{props.title}: </span>
      {props.type === 'scale' ? <HorizRules /> : <span>{props.description}</span>}
    </StyledAttribute>
  )
}

export { Attribute };