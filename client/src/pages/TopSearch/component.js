import { StyledTopSearch } from "./style";
import { Profile } from "../../components/ProfileBlock";

function TopSearch({ topBreedList }) {
  return (
    <StyledTopSearch>
      <header>
        <h1>Top 10 most searched breeds</h1>
      </header>
      <main>
        {topBreedList.map((breed, idx) => {
          return (
            <Profile
              imgUrl={breed.imageUrl}
              title={`${idx + 1}. ${breed.name}`}
              body={breed.description}
            />
          );
        })}
      </main>
    </StyledTopSearch>
  );
}

export { TopSearch };
