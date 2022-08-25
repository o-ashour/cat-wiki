import styled from 'styled-components';

export const StyledInput = styled.label`
  .input-btn {
    font-family: 'Montserrat', sans-serif;    
    padding: 0.65em 1em;
    width: 8em;
    border-radius: 2em;
    border: none;
  
    :focus {
      outline: none;
    }

    ::placeholder {
      font-size: 0.8rem;
      color: #291507;
      opacity: 1;
    }
  }

  svg {
    cursor: pointer;
  }

  .input-modal {
    background-color: #fff;
    color: #000;
    position: absolute;
    height: 12em;
    width: 9em;
    overflow-y: scroll;
    font-size: 0.75rem;
    margin-top: 0.5em;
    padding: 0.75em 1em;
    border-radius: 1em;

    li {
      margin-bottom: 0.75em;

      :hover {
        background: lightgrey;
      }
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.medium}){
    .input-btn {
      padding: 1.25em 2em;
      width: inherit;
      margin-top: 2em;
  
      ::placeholder {
        font-size: 1rem;
      }
    }

    .input-modal {
      height: 14em;
      width: inherit;
      font-size: 0.9rem;
      margin-top: 0.75em;
      padding: 1.2em 1.4em 0.1em;
  
      li {
        margin-bottom: 1.5em;
      }
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    .input-btn {
      margin: 1.9em 0 0.75em;
      padding: 1.9em 2em;
      border-radius: 3em;
      
      ::placeholder {
        font-size: 1.1rem;
        font-weight: 500;
      }
    }

    .input-modal {
      font-size: 1.1rem;
      font-weight: 500;
      padding: 1.4em 1.25em 0.75em;
  
      li {
        margin-bottom: 1.9em;
      }
  
      li:last-child {
        margin-bottom: 1em;
      }
    }
  }
`

// display: ${(props) => props.isModalOpen === true ? 'block' : 'none'};
