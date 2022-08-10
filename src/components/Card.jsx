import persianImg from '../assets/images/image 2.png'; 
import { StyledCard } from './styles/Card.styled';
import { StyledSelected } from './styles/Selected.styled';

function Card({ caption, imgWidth, selected }) {
  return (
    <StyledCard imgWidth={imgWidth}>
      {selected ? 
        <StyledSelected className='discover-selected'>
          <img src={persianImg} alt='persian' />  
        </StyledSelected> :
        <img src={persianImg} alt='persian' />  
      }
      <figcaption>
        {caption === 'none' ? null : 'persian'}
      </figcaption>
    </StyledCard>
  )
}

export default Card;