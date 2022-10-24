import { StyledArticle } from "../../components/Global/Article.styled";
import { StyledSelected } from "../../components/Global/Selected.styled";
import { Attributes } from "../../components/Attributes";
import { Gallery } from "../../components/Gallery";
import { StyledDetails } from "./style";
import { UserContext } from "../../App";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Details({ breedImgs }) {
  const { selectedBreedObj } = useContext(UserContext);
  const navigate = useNavigate();
  const isBreedSelected = Object.keys(selectedBreedObj).length > 0;

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
            <StyledSelected className="profile-image">
              {selectedBreedObj.imageUrl ? (
                <img
                  src={selectedBreedObj.imageUrl}
                  alt={selectedBreedObj.name}
                />
              ) : (
                <p className="message">Oooops! No image to display.</p>
              )}
            </StyledSelected>
            <div className="profile-description">
              <StyledArticle>
                <h1>{selectedBreedObj.name}</h1>
                <p>{selectedBreedObj.description}</p>
              </StyledArticle>
              <Attributes />
            </div>
          </StyledDetails>
          <Gallery breedImgs={breedImgs} />{" "}
        </>
      )}
    </>
  );
}

export { Details };
