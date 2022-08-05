import { StyledC2a } from "./styles/C2a.styled";
import persianImg from './assets/images/image 2.png';
import { StyledSelected } from "./styles/Selected.styled";
import Attributes from "./components/Attributes";
import Gallery from "./components/Gallery";


function Details(){
  return (
    <>
      <StyledSelected>
        <img src={persianImg} alt='Persian' />
      </StyledSelected>
      <StyledC2a margin="small">
        <h1 style={{marginBottom: '0.5em'}}>Bengal</h1>
        <p style={{fontWeight: '400'}}>Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</p>
      </StyledC2a>
      <Attributes />
      <h2 style={{fontWeight: '600', padding: '0 0.75em'}}>Other photos</h2>
      <Gallery />
    </>
  )
}

export default Details;