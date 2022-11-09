import styled from "styled-components";

export const StyledNavModal = styled.div`
  display: flex;
  justify-content: center;

  .modal-background {
    position: absolute;
    height: 2100px;
    width: 100%;
    background: ${(props) => props.theme.colors.tertiary};
    z-index: 2;
    opacity: 0.85;
  }

  .modal {
    width: 91%;
    margin-top: 1em;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 14px;
    position: absolute;
    z-index: 2;
  }

  .nav-list {
    padding: 2em;
    padding-bottom: 0.5em;

    a {
      text-decoration: none;
    }

    li {
      text-align: center;
      font-size: 1.25rem;
      font-weight: 600;
      letter-spacing: 3px;
      margin-bottom: 1.65em;
      color: ${(props) => props.theme.colors.accent_1};
      opacity: 0.7;
    }

    .nav-link-active {
      text-decoration: underline;
      opacity: 0.9;
    }
  }
`;
