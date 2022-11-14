import styled from "styled-components";

export const StyledModal = styled.div`
  display: ${(props) => (props.isModalOpen ? "block" : "none")};

  .modal-background {
    position: absolute;
    height: 2100px;
    width: 100%;
    background: ${(props) => props.theme.colors.tertiary};
    z-index: 2;
    opacity: 0.85;
  }

  .modal {
    width: 100%;
    min-height: 12em;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0px 0px 1px 1px;
    position: absolute;
    z-index: 2;
  }

  header {
    padding: 1.25em 1.2em;

    svg {
      float: right;
      cursor: pointer;
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.accent_1};
    }
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

  .input-search {
    padding: 0 1em;
    margin-top: 2.5em;
  }

  .input-btn {
    font-size: 1.125rem;
    border: 1px solid ${(props) => props.theme.colors.tertiary};
  }

  #search-icon {
    font-size: 1.05rem;
    color: ${(props) => props.theme.colors.accent_1};
    position: absolute;
    top: 15px;
    right: 15px;
    // z-index: 1;
    opacity: 0.87;
  }

  #input-results {
    position: initial;
    width: 100%;
    max-height: initial;
    font-size: 1.125rem;
    padding: 0 0.5em;

    li {
      margin-top: 1.6em;
      margin-bottom: 2.5em;
    }

    a:last-child {
      li {
        margin-bottom: 2em;
      }
    }
  }

  .error-message {
    color: ${(props) => props.theme.colors.accent_6};
    margin-left: 1em;
    font-weight: 500;
  }
`;
