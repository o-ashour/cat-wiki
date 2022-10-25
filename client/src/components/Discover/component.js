import { StyledDiscover } from "./style";
import { Card } from "../Cardi";
import { C2a } from "../C2a";

function Discover({ topBreedList, breedImgs }) {
  let previewTopBreedList;

  for (let i = 0; i <= 4; i++) {
    previewTopBreedList = topBreedList.slice(0, 4);
  }

  return (
    <StyledDiscover>
      <header>
        <h3>Most Searched Breeds</h3>
        <hr></hr>
        <div className="discover-heading">
          <h2>66+ Breeds For you to Discover</h2>
          <C2a value="SEE MORE" url="/topsearch" direction="right" />
        </div>
      </header>
      <article>
        {previewTopBreedList.map((breed) => {
          return <Card name={breed.name} imageUrl={breed.imageUrl} />;
        })}
      </article>
    </StyledDiscover>
  );
}

export { Discover };
