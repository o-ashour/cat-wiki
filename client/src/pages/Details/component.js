import { StyledArticle } from "../../components/Global/Article.styled";
import { StyledSelected } from "../../components/Global/Selected.styled";
import { Attributes } from "../../components/Attributes";
import { Gallery } from "../../components/Gallery";
import { StyledDetails } from "./style";
import { UserContext } from "../../App";
import React, { useContext } from "react";

function Details({ breedImgs }) {
  const { selectedBreedObj } = useContext(UserContext);

  return (
    <>
      <StyledDetails>
        <StyledSelected className="profile-image">
          {selectedBreedObj.imageUrl ? <img src={selectedBreedObj.imageUrl} alt={selectedBreedObj.name} /> : <message>Oooops! No image to display.</message>}
        </StyledSelected>
        <div className="profile-description">
          <StyledArticle>
            <h1>{selectedBreedObj.name}</h1>
            <p>{selectedBreedObj.description}</p>
          </StyledArticle>
          <Attributes />
        </div>
      </StyledDetails>
      <Gallery breedImgs={breedImgs} />
    </>
  );
}

export { Details };
