import persianImg from "../../assets/images/image 2.png";
import { StyledCard } from "./style";

function Card({ imgWidth, name, imageUrl }) {
  return (
    <StyledCard imgWidth={imgWidth}>
      <img src={imageUrl} alt={name} />
      <figcaption>{name}</figcaption>
    </StyledCard>
  );
}

export { Card };
