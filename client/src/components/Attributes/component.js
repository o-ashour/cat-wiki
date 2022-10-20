import { Attribute } from "./Attribute";
import { StyledAttributes } from "./style";
import { UserContext } from "../../App";
import { useContext } from "react";

function Attributes() {
  const { selectedBreedObj } = useContext(UserContext);

  return (
    <StyledAttributes>
      <Attribute
        type="description"
        title="Temperament"
        description={selectedBreedObj.temperament}
      />
      <Attribute
        type="description"
        title="Origin"
        description={selectedBreedObj.origin}
      />
      <Attribute
        type="description"
        title="Life Span"
        description={`${selectedBreedObj.life_span} years`}
      />
      <Attribute
        type="scale"
        title="Adaptability"
        score={selectedBreedObj.adaptability}
      />
      <Attribute
        type="scale"
        title="Affection Level"
        score={selectedBreedObj.affection_level}
      />
      <Attribute
        type="scale"
        title="Child Friendly"
        score={selectedBreedObj.child_friendly}
      />
      <Attribute
        type="scale"
        title="Grooming"
        score={selectedBreedObj.grooming}
      />
      <Attribute
        type="scale"
        title="Intelligence"
        score={selectedBreedObj.intelligence}
      />
      <Attribute
        type="scale"
        title="Health issues"
        score={selectedBreedObj.health_issues}
      />
      <Attribute
        type="scale"
        title="Social needs"
        score={selectedBreedObj.social_needs}
      />
      <Attribute
        type="scale"
        title="Stranger friendly"
        score={selectedBreedObj.stranger_friendly}
      />
    </StyledAttributes>
  );
}

export { Attributes };
