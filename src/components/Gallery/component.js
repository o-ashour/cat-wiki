import { StyledGallery } from "./style";
import { Card } from "../Cardi";
import { UserContext } from "../../App";
import { useContext } from "react";

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