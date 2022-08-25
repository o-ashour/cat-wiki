import { FaSearch } from "react-icons/fa";
import { StyledInput } from "./style";
import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Modal from "./Modal";
// figure out a way to not only select breed from search results modal, but actually
// go to 'Details' page when click on breed

function Input() {
  const {
    selectedBreedObj,
    setSelectedBreedObj,
    isModalOpen,
    setIsModalOpen,
    breedList,
  } = useContext(UserContext);
  // change breedNames to something like 'breed objects'
  const [breedListFiltered, setBreedListFiltered] = useState({
    breedNames: breedList,
    breedIds: breedList.map((breed, idx) => idx),
  });
  const navigate = useNavigate();

  function handleClick(e) {
    const selectedBreedId = e.target.id;
    setSelectedBreedObj(breedList[selectedBreedId]);
  }

  function handleChange(e) {
    if (e.target.value === "") {
      setIsModalOpen(false);
      setBreedListFiltered({
        breedNames: breedList,
        breedIds: breedList.map((breed, idx) => idx),
      });
    } else {
      setIsModalOpen(true);
      const inputStr = e.target.value;
      const miniInputStr = minifyString(inputStr);
      const miniBreedStrArr = [];
      breedList.forEach((breed) =>
        miniBreedStrArr.push(minifyString(breed.name))
      );
      const filteredBreedsIdx = [];
      miniBreedStrArr.forEach((breedName, idx) => {
        if (breedName.includes(miniInputStr)) {
          filteredBreedsIdx.push(idx);
        }
      });

      const filteredBreeds = breedList.filter((breed, idx) => {
        return filteredBreedsIdx.some((item) => item === idx);
      });

      if (filteredBreeds.length === 0) {
        setIsModalOpen(false);
      }

      setBreedListFiltered({
        breedNames: filteredBreeds,
        breedIds: filteredBreedsIdx,
      });
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && breedListFiltered.breedNames.length === 1) {
      const selectedBreedId = breedListFiltered.breedIds[0];
      setSelectedBreedObj(breedList[selectedBreedId]);
      navigate("/details");
    }
  }

  function handleIconClick() {
    if (breedListFiltered.breedNames.length === 1) {
      const selectedBreedId = breedListFiltered.breedIds[0];
      setSelectedBreedObj(breedList[selectedBreedId]);
      navigate("/details");
    }
  }

  function minifyString(str) {
    const miniStrArr = str.match(/[A-Za-z]/g);
    let miniStr = "";
    miniStrArr.forEach((letter) => (miniStr += letter));
    return miniStr.toLowerCase();
  }

  return (
    <div>
      <StyledInput>
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="input-btn"
          placeholder="Search"
        />
        <FaSearch onClick={handleIconClick} />
      </StyledInput>
      {isModalOpen && (
        <Modal
          breedListFiltered={breedListFiltered}
          onClick={handleClick}
          id="modal"
        />
      )}
    </div>
  );
}

export { Input };
