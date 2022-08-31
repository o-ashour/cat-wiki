import { FaSearch } from "react-icons/fa";
import { StyledInput } from "./style";
import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { Modal } from "./Modal/component";

function Input() {
  // hooks
  const { setSelectedBreedObj, isModalOpen, setIsModalOpen, breedList } =
    useContext(UserContext);
  const [breedListFiltered, setBreedListFiltered] = useState({
    breedObjects: breedList,
    breedIds: breedList.map((breed, idx) => idx),
  });
  const [arrowVar, setArrowVar] = useState({ value: 0, isChanged: false });
  const navigate = useNavigate();

  // functions
  // handles logic of clicking on item in search modal
  function handleClick(e) {
    const selectedBreedId = e.target.id;
    setSelectedBreedObj(breedList[selectedBreedId]);
  }

  // handles changes in input field
  function handleChange(e) {
    const inputStr = e.target.value;
    setArrowVar({ value: 0, isChanged: false });
    // value from input is checked as a valid breed-name
    let validInputStr = validateInput(inputStr);
    // closes and initializes modal by checking if input field is blank
    if (validInputStr === "") {
      setIsModalOpen(false);
      setBreedListFiltered({
        breedObjects: breedList,
        breedIds: breedList.map((breed, idx) => idx),
      });
      // when there is some input..
    } else {
      // modal should appear
      setIsModalOpen(true);
      // update search results displayed in modal
      updateModalList(validInputStr);
    }
  }

  function updateModalList(str) {
    const breedsLowerCaseArr = breedList.map((breed) =>
      breed.name.toLowerCase()
    );
    const filteredBreedsIdx = [];
    // compare breed names from list with input and store matched indicies in array
    breedsLowerCaseArr.forEach((breedName, idx) => {
      if (
        breedName.charAt(0) === str.charAt(0) &&
        (breedName.includes(str) ||
          breedName.replaceAll("-", " ").includes(str))
      ) {
        filteredBreedsIdx.push(idx);
      }
    });

    // store search results (filtered breeds) based on index matches from above
    const filteredBreeds = breedList.filter((breed, idx) => {
      return filteredBreedsIdx.some((item) => item === idx);
    });

    // if there are no matches, modal doesn't appear
    if (filteredBreeds.length === 0) {
      setIsModalOpen(false);
    }

    // update filtered breed list
    setBreedListFiltered({
      breedObjects: filteredBreeds,
      breedIds: filteredBreedsIdx,
    });
  }

  // handles logic for keyboard inputs
  function handleKeyDown(e) {
    // increment value for arrow variable as long as value is less than modal list items
    // stops navigation at last item in list
    if (
      e.key === "ArrowDown" &&
      !(arrowVar.value >= breedListFiltered.breedObjects.length)
    ) {
      setArrowVar((prevState) => {
        return { value: prevState.value + 1, isChanged: true };
      });
      // decrement value for arrow variable as long as value is more than 0
      // stops navigation at first item in list
    } else if (e.key === "ArrowUp" && !(arrowVar.value <= 0)) {
      setArrowVar((prevState) => {
        return { ...prevState, value: prevState.value - 1 };
      });
      // navigates to appropriate breed details page when item is selected from list with arrows
      // and enter is pressed
    } else if (e.key === "Enter" && arrowVar.value > 0) {
      const selectedBreedId = breedListFiltered.breedIds[arrowVar.value - 1];
      setSelectedBreedObj(breedList[selectedBreedId]);
      navigate("/details");
      // finds match for keyed-in search and goes to appropriate page if matches on enter
    } else if (e.key === "Enter") {
      const inputStr = validateInput(e.target.value);
      const selectedBreedId = breedList.findIndex(
        (breed) => validateInput(breed.name) === inputStr
      );
      if (selectedBreedId !== -1) {
        setSelectedBreedObj(breedList[selectedBreedId]);
        navigate("/details");
      } else {
        //replace with ui
        console.log("enter valid breed");
      }
    }
  }

  // matches expected breed-name string format based on regex
  function validateInput(str) {
    const trimmedStr = str.trim();
    const regex =
      /^[A-Za-z]+-*[A-Za-z]*\s*[A-Za-z]*-*[A-Za-z]*\s*[A-Za-z]*-*[A-Za-z]*\s*$/;
    const strArr = trimmedStr.match(regex);
    if (strArr !== null) {
      return strArr[0].toLowerCase();
    } else {
      return "";
    }
  }

  return (
    <div>
      <StyledInput>
        <input
          className="input-btn"
          placeholder="Search"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <FaSearch id="search-icon" />
      </StyledInput>
      {isModalOpen && (
        <Modal
          arrowVar={arrowVar}
          breedListFiltered={breedListFiltered}
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export { Input };
