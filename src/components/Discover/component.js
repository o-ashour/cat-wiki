import { StyledDiscover } from "./style";
import { Card } from "../Cardi";
import { C2a } from "../C2a";

function Discover() {
  return (
    <StyledDiscover>
      <header>
        <h3>Most Searched Breeds</h3>
        <hr></hr>
        <div className='discover-heading'>
          <h2>66+ Breeds For you to Discover
          </h2>
          <C2a value='SEE MORE' url='/topsearch' />
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

export { Discover };