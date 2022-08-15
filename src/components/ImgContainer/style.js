import styled from "styled-components";

export const StyledImgContainer = styled.section`
  display: grid;
  grid-template-columns: 0.25fr 1.15fr 1.3fr;
  gap: 1em;
  grid-gap: 1em;
  margin-top: 4em;
  padding-bottom: 0.5em;

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

  @media(min-width: ${(props) => props.theme.breakpoints.medium}){
    grid-template-columns: 1em 8em 10em;
    gap: 0.75em;
    grid-gap: 0.75em;
    margin-top: 2em;
    margin-right: 4em;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    grid-template-columns: 4em 12em 14.5em;
    gap: 1.5em;
    grid-gap: 1.5em;
    margin-top: 0;
  }
`