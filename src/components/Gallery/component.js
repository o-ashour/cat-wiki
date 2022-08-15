import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { StyledGallery } from "./style";
import { Card } from "../Cardi";
import { UserContext } from "../../App";
import { useContext } from "react";

//maybe change out Card here for another component without a caption
// images for this gallery have to be rendered by mapping through whatever images are
// available from api because quantity varies
// layout, thus, needs adjustment, and better to, again, choose 'contain' over 'cover' for 
// image object-fit to guarantee seeing all the image..also image optimization! 

function Gallery() {
  const { breedImgs } = useContext(UserContext); 

  return (
    <StyledGallery>
      <header>
        <h2>Other photos</h2>
      </header>
      <div className='details-gallery'>
        <FaAngleLeft style={{alignSelf: 'center', position: 'absolute', left: 0}} fontSize="2em" fill="#DEC68B"/>
        <Card url={breedImgs[0].url} caption='none' />
        <Card url={breedImgs[1].url} caption='none' />
        <FaAngleRight style={{alignSelf: 'center', position: 'absolute', right: 0}} fontSize="2em" fill="#DEC68B"/>
        <Card url={breedImgs[2].url} caption='none' /> 
        <Card url={breedImgs[3].url} caption='none' />
      </div>
    </StyledGallery>
  )
}

export { Gallery };