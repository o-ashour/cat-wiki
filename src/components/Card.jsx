import persianImg from '../assets/images/image 2.png'; 
import { StyledCard } from '../styles/Card.styled';

function Card({ caption, imgWidth }) {
  return (
    <StyledCard imgWidth={imgWidth}>
      <img src={persianImg} alt='persian' />  
      <figcaption>
        {caption === 'none' ? null : 'persian'}
      </figcaption>
    </StyledCard>
  )
}

export default Card;