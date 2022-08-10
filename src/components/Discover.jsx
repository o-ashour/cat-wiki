import { StyledDiscover } from "./styles/Discover.styled";
import Card from "./Card";
import C2a from "./C2a";
import { StyledSelected } from "./styles/Selected.styled";

function Discover() {
  return (
    <StyledDiscover>
      <header>
        <h3>Most Searched Breeds</h3>
        <hr></hr>
        <div className='discover-heading'>
          <h2>66+ Breeds For you to Discover
          </h2>
          <C2a value='SEE MORE' />
        </div>
      </header>
      <article>
        <Card selected={true} />
        <Card />
        <Card />
        <Card />
      </article>
    </StyledDiscover>
  )
}

export default Discover;