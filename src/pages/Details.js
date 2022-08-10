import { StyledC2a } from "../components/styles/C2a.styled";
import persianImg from '../assets/images/image 2.png';
import { StyledSelected } from "../components/styles/Selected.styled";
import { Attributes } from "../components/Attributes";
import { Gallery } from "../components/Gallery";
import { StyledDetails } from "../components/styles/Details.styled";


function Details(){
  return (
    <>
      <StyledDetails>
        <StyledSelected className='profile-image'>
          <img src={persianImg} alt='Persian' style={{zIndex: '1'}}/>
        </StyledSelected>
        <div className='profile-description'>
          <StyledC2a margin="small">
            <h1>Bengal</h1>
            <p>Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</p>
          </StyledC2a>
          <Attributes />
        </div>
      </StyledDetails>
      <Gallery />
    </>
  )
}

export default Details;