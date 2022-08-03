import { StyledDiscover } from "../styles/Discover.styled";
import Card from "./Card";

function Discover() {
  return (
    <StyledDiscover>
      <header>
        <h3>Most Searched Breeds</h3>
        <hr></hr>
        <h2>66+ Breeds For you to Discover</h2>
      </header>
      <article>
        <Card />
        <Card />
        <Card />
        <Card />
      </article>
    </StyledDiscover>
  )
}

export default Discover;