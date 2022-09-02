import { StyledGallery } from "./style";
import { Photo } from "./Photo";
import { UserContext } from "../../App";
import { useContext } from "react";

function Gallery() {
  const { breedImgs } = useContext(UserContext); 
  return (
    <StyledGallery>
      <header>
        <h2>Other photos</h2>
      </header>
      <div className='container'>
        {breedImgs.map((breedImg, idx) => {
          return <Photo key={idx} url={breedImg.url} name={breedImg.breeds[0].name}/>
        })}
      </div>
    </StyledGallery>
  )
}

export { Gallery };