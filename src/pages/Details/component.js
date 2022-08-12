import { StyledArticle } from "../../components/Article/style";
import persianImg from '../../assets/images/image 2.png';
import { StyledSelected } from "../../components/styles/Selected.styled";
import { Attributes } from "../../components/Attributes";
import { Gallery } from "../../components/Gallery";
import { StyledDetails } from "./style";

function Details(){
  return (
    <>
      <StyledDetails>
        <StyledSelected className='profile-image'>
          <img src={persianImg} alt='Persian' style={{zIndex: '1'}}/>
        </StyledSelected>
        <div className='profile-description'>
          <StyledArticle>
            <h1>Bengal</h1>
            <p>Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</p>
          </StyledArticle>
          <Attributes />
        </div>
      </StyledDetails>
      <Gallery />
    </>
  )
}

export { Details };