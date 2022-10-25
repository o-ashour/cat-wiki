import { StyledGallery } from "./style";
import { Photo } from "./Photo";
// import { UserContext } from "../../App";
// import { useContext } from "react";
import { useState } from "react";
import { C2a } from "../C2a";

function Gallery({breedImgs}) {
  const [imgGroup, setImgGroup] = useState(0);

  function handleClick() {
    console.log("clicked");
    if (imgGroup === 0) {
      setImgGroup(1);
    } else {
      setImgGroup(0);
    }
  }

  // const { breedImgs } = useContext(UserContext);
  return (
    <StyledGallery imgGroup={imgGroup}>
      <header>
        <h2>Other photos</h2>
      </header>
      {!breedImgs.length > 0 ? (
        <message>Sorry, no images to display</message>
      ) : null}
      <div className="container">
        {breedImgs.map((breedImg, idx) => {
          return (
            <Photo
              key={idx}
              url={breedImg.url}
              name={breedImg.breeds[0].name}
            />
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
