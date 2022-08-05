import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5em;
  margin: 1.5em 0;

  img {
    width: 10em;
    height: 9em;
    object-fit: cover;
    border-radius: 1em;
  }
`