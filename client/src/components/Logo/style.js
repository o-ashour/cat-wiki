import styled from "styled-components";

export const StyledLogo = styled.img`
  filter: ${({ theme }) =>
    theme === "dark" ? "brightness(0) invert(1)" : "brightness(0) invert(0)"};
`;
