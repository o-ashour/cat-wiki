import { Attribute } from "./Attribute";
import { StyledAttributes } from "./style";
import { UserContext } from "../../App";
import { useContext } from "react";

function Attributes() {
  const { selectedBreedObj } = useContext(UserContext);

  const selectedAttributes = [
    {
      type: "description",
      title: "Temperament",
      value: selectedBreedObj.temperament,
    },
    {
      type: "description",
      title: "Origin",
      value: selectedBreedObj.origin,
    },
    {
      type: "description",
      title: "Life Span",
      value: `${selectedBreedObj.life_span} years`,
    },
    {
      type: "scale",
      title: "Adaptability",
      value: selectedBreedObj.adaptability,
    },
    {
      type: "scale",
      title: "Affection Level",
      value: selectedBreedObj.affection_level,
    },
    {
      type: "scale",
      title: "Child Friendly",
      value: selectedBreedObj.child_friendly,
    },
    {
      type: "scale",
      title: "Grooming",
      value: selectedBreedObj.grooming,
    },
    {
      type: "scale",
      title: "Intelligence",
      value: selectedBreedObj.intelligence,
    },
    {
      type: "scale",
      title: "Health issues",
      value: selectedBreedObj.health_issues,
    },
    {
      type: "scale",
      title: "Social needs",
      value: selectedBreedObj.social_needs,
    },
    {
      type: "scale",
      title: "Stranger friendly",
      value: selectedBreedObj.stranger_friendly,
    },
  ];

  return (
    <StyledAttributes>
      {selectedAttributes.map((selectedAttribute) => {
        return (
          <Attribute
            type={selectedAttribute.type}
            title={selectedAttribute.title}
            value={selectedAttribute.value}
          />
        );
      })}
    </StyledAttributes>
  );
}

export { Attributes };
