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
              key={breed.id}
              name={breed.name}
              imgUrl={breed.imageUrl}
              body={breed.description}
              idx={idx}
            />
          );
        })}
      </main>
    </StyledTopSearch>
  );
}

export { TopSearch };
