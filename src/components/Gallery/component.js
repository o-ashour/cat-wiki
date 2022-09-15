import { StyledGallery } from "./style";
import { Photo } from "./Photo";
import { UserContext } from "../../App";
import { useContext } from "react";
import { FaBluetooth } from "react-icons/fa";

function Gallery() {

  function handleClick(){
    console.log('clicked');
  }

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
      <button style={{padding: '0.25em', background: 'blue', color: '#fff', cursor: 'pointer'}} onClick={handleClick}>See More</button>
    </StyledGallery>
  )
}

export { Gallery };