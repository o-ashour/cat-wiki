import persianImg from "../../assets/images/image 2.png";
import { StyledCard } from "./style";

function Card({ caption, imgWidth, selected, url }) {
  return (
    <StyledCard imgWidth={imgWidth}>
      {url ? (
        <img src={url} alt="siamese" />
      ) : (
        <img src={persianImg} alt="persian" />
      )}
      <figcaption>persian</figcaption>
    </StyledCard>
  );
}

export { Card };
