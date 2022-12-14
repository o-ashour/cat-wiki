import { StyledGallery } from "./style";
import { Photo } from "./Photo";
import { useState } from "react";
import { C2a } from "../C2a";

function Gallery({ breedImgs, selectedBreedObj }) {
  const [imgGroup, setImgGroup] = useState(0);

  function handleClick() {
    if (imgGroup === 0) {
      setImgGroup(1);
    } else {
      setImgGroup(0);
    }
  }

  return (
    <StyledGallery imgGroup={imgGroup}>
      <header>
        <h2>Other photos</h2>
      </header>
      {!breedImgs.length > 0 ? (
        <p className="message">Sorry, no images to display</p>
      ) : null}
      <div className="container">
        {breedImgs.map((breedImg, idx) => {
          return (
            <Photo key={idx} url={breedImg.url} name={selectedBreedObj.name} />
          );
        })}
      </div>
      <nav>
        {breedImgs.length > 0 && imgGroup === 0 ? (
          <C2a
            value="SEE MORE"
            onClick={handleClick}
            url="#"
            direction="right"
            id="gallery-btn"
          />
        ) : breedImgs.length > 0 && imgGroup === 1 ? (
          <C2a
            value="BACK"
            onClick={handleClick}
            url="#"
            direction="left"
            id="gallery-btn"
          />
        ) : null}
        <div className="clearfix"></div>
      </nav>
    </StyledGallery>
  );
}

export { Gallery };
