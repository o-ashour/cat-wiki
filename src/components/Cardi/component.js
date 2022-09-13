import persianImg from '../../assets/images/image 2.png'; 
import { StyledCard } from './style';
import { StyledSelected } from '../Global/Selected.styled';

function Card({ caption, imgWidth, selected, url }) {
  return (
    <StyledCard imgWidth={imgWidth}>
      {selected ? 
        <StyledSelected className='discover-selected'>
          <img src={persianImg} alt='persian' />  
        </StyledSelected> : url ? 
          <img src={url} alt='siamese' /> :
        <img src={persianImg} alt='persian' />  
      }
      <figcaption>
        {caption === 'none' ? null : 'persian'}
      </figcaption>
    </StyledCard>
  )
}

export {Card};