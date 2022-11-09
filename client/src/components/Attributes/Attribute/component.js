import { StyledAttribute } from "./style";
import HorizRules from "./elements/HorizRules";

function Attribute({ type, title, value }) {
  return (
    <StyledAttribute value={Number(value) ? value : null} type={type}>
      <span>{title}: </span>
      {type === "scale" ? (
        <HorizRules />
      ) : (
        <span>{String(value) ? value : null}</span>
      )}
    </StyledAttribute>
  );
}

export { Attribute };
