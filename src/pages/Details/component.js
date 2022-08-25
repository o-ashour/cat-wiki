import { StyledArticle } from "../../components/Article/style";
import { StyledSelected } from "../../components/styles/Selected.styled";
import { Attributes } from "../../components/Attributes";
import { Gallery } from "../../components/Gallery";
import { StyledDetails } from "./style";
import { UserContext } from "../../App";
import React, { useContext } from "react";

// line up attribute horizontal bars
// try object-fit: contain for image and look into how to optimize as sizes are very large 

function Details({ breedImgs }) {
  const { selectedBreedObj } = useContext(UserContext);

  return (
    <>
      <StyledDetails>
        <StyledSelected className='profile-image'>
          <img src={selectedBreedObj.image.url} alt={selectedBreedObj.name} style={{zIndex: '1'}}/>
        </StyledSelected>
        <div className='profile-description'>
          <StyledArticle>
            <h1>{selectedBreedObj.name}</h1>
            <p>{selectedBreedObj.description}</p>
          </StyledArticle>
          <Attributes />
        </div>
      </StyledDetails>
      <Gallery breedImgs={breedImgs} />
    </>
  )
}

export { Details };