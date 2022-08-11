import styled from "styled-components";

export const StyledDetails = styled.div` 
  article {
    h1 {
      margin-bottom: 0.5em;
    }

    p {
      font-weight: 400;
    }
  }
  
  @media(min-width: ${(props) => props.theme.breakpoints.medium}){
    padding: 2em;
    padding-top: 0.5em;

    .profile-image {
      width: auto;
      margin-top: 1em;
      margin-left: 3em;

      ::after {
        left: -8px;
      }
    }

    .profile-description {
      margin-left: 3em;
      padding-top: 1em;

      article {
        display: flex;
        flex-flow: column;
        margin: 0;
        padding: 0;

        h1 {
          font-size: 2.1rem;
          margin-top: 0.55em;
          margin-bottom: 0.25em;
        }

        p {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.extra_large}){
    display: flex;

    .profile-image {
      flex: 0.8;
      align-items: start;
      margin-top: 0;

      ::after {
        height: 38%;
        left: 25.5%;
        border-radius: 19px;
        top: 6%;
      }

      img {
        margin: 1em 0em 1em 10em;
        width: 23em;
        height: 23em;
        object-fit: cover;
        border-radius: 31px;
      }
    }

    .profile-description {
      flex: 1.2;
      margin-left: 6em;

      article {

        h1 {
          font-size: 2.4rem;
          font-weight: 600;
          margin-bottom: 0.2em;
        }
  
        p {
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 0.25em;
          padding-right: 8em; 
        }
      }
    }
  }
`