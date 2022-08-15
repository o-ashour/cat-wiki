import ladyImg from '../../assets/images/image 1.png';
import persianImg from '../../assets/images/image 2.png';
import roadImg from '../../assets/images/image 3.png';
import { StyledImgContainer } from './style';


function ImgContainer() {
  return (
    <StyledImgContainer>
      <img src={persianImg} alt='persian cat' />
      <img src={roadImg} alt='cat on the road' />
      <img src={ladyImg} alt='lady & cat' />
    </StyledImgContainer>
  )
}

export { ImgContainer };