import { StyledArticle } from "../../components/Global/Article.styled";
import { Attributes } from "../../components/Attributes";
import { Gallery } from "../../components/Gallery";
import { StyledDetails } from "./style";
import { UserContext } from "../../App";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

function Details({ breedImgs }) {
  const { selectedBreedObj } = useContext(UserContext);
  const navigate = useNavigate();
  const isBreedSelected = Object.keys(selectedBreedObj).length > 0;

  function setProfileImg() {
    let profileImg;

    if (selectedBreedObj.imageUrl) {
      profileImg = (
        <img src={selectedBreedObj.imageUrl} alt={selectedBreedObj.name} />
      );
    } else if (breedImgs.length > 0) {
      profileImg = (
        <img
          src={breedImgs[_.random(breedImgs.length - 1)].url}
          alt={selectedBreedObj.name}
        />
      );
    } else {
      return <blockquote>Oooops! No image to display.</blockquote>;
    }
    return profileImg;
  }

  useEffect(() => {
    if (!isBreedSelected) {
      navigate("/");
    }
  }, [selectedBreedObj]);

  return (
    <>
      {!isBreedSelected ? null : (
        <>
          <StyledDetails>
            {selectedBreedObj.imageUrl || breedImgs.length > 0 ? (
              <div className="profile-image">{setProfileImg()}</div>
            ) : null}

            <div className="profile-description">
              <StyledArticle>
                <h1>{selectedBreedObj.name}</h1>
                <p>{selectedBreedObj.description}</p>
              </StyledArticle>
              <Attributes />
            </div>
          </StyledDetails>
          <Gallery breedImgs={breedImgs} selectedBreedObj={selectedBreedObj} />
        </>
      )}
    </>
  );
}

export { Details };
