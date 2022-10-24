import persianImg from "../../assets/images/image 2.png";
import { StyledCard } from "./style";

function Card({ imgWidth, name, imageUrl }) {
  return (
    <StyledCard imgWidth={imgWidth}>
      {imageUrl ? (
        <img src={imageUrl} alt={name} />
      ) : (
        // find stock image or use image from breedImgs collection
        <img src={persianImg} alt="persian" />
      )}
      <figcaption>{name}</figcaption>
    </StyledCard>
  );
}

export { Card };
