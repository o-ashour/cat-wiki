import { StyledAttribute } from "./style";
import HorizRules from "./elements/HorizRules";

function Attribute(props) {
  return (
    <StyledAttribute score={props.score} type={props.type}>
      <span>{props.title}: </span>
      {props.type === 'scale' ? <HorizRules /> : <span>{props.description}</span>}
    </StyledAttribute>
  )
}

export { Attribute };