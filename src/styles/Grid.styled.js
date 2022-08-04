import styled from "styled-components";

export const StyledImgContainer = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 1.15fr 1.3fr;
  gap: 1em;
  grid-gap: 1em;
  margin-top: 4em;
  padding-bottom: 7em;

  img:nth-child(1){
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }

  img:nth-child(2){
    grid-row: 1 / 3;
    grid-column: 3 / 4;
  }

  img:nth-child(3){
    grid-row: 2 / 4;
    grid-column: 2 / 3;
  }
`