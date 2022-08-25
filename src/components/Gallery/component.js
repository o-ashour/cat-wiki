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
        {breedImgs.map((breedImg, idx) => {
          return <Card key={idx} url={breedImg.url} caption='none' />
        })}
      </div>
    </StyledGallery>
  )
}

export { Gallery };