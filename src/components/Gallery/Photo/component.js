import { StyledPhoto } from "./style";

function Photo({ url, name }) {
  return (
    <StyledPhoto>
      <img src={url} alt={name} />
    </StyledPhoto>
  );
}

export { Photo };
