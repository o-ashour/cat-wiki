import { FaSearch } from "react-icons/fa";
import { StyledInput } from "./style";
import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { Modal } from "./Modal/component";

function Input() {
  // variables
  // using context hook to bring in states declared in top-level App component
  const { setSelectedBreedObj, isModalOpen, setIsModalOpen, breedList } =
    useContext(UserContext);
  // using state hook to declare and update object of list of breeds post-search-filtering and list of breed ids
  const [breedListFiltered, setBreedListFiltered] = useState({
    breedObjects: breedList,
    breedIds: breedList.map((breed, idx) => idx),
  });
  // using navigate hook to change routes in keydown handler
  const navigate = useNavigate();

  // functions (handler logic)
  // handles logic of clicking on item in search modal
  // stores item's id in variable then updates the 'selected breed object' with targeted item
  function handleClick(e) {
    const selectedBreedId = e.target.id;
    setSelectedBreedObj(breedList[selectedBreedId]);
  }

  // handles logic of any input changes happening in search field
  function handleChange(e) {
    // any value in input is stored in a constant variable
    const inputStr = e.target.value;
    // the value from input is 'minified' or filtered from any non-alphabetical characters
    // using a custom 'minify' function
    let miniInputStr = minifyString(inputStr);
    // closes and initializes modal by checking if input field is blank
    // breed list is set to initial list retrieved from api
    if (e.target.value === "" || miniInputStr === "") {
      setIsModalOpen(false);
      setBreedListFiltered({
        breedObjects: breedList,
        breedIds: breedList.map((breed, idx) => idx),
      });
      // when there is some input..
    } else {
      // modal should appear
      setIsModalOpen(true);

      const miniBreedStrArr = [];
      // same minification as above is done to all names of breeds from inital api list
      breedList.forEach((breed) =>
        miniBreedStrArr.push(minifyString(breed.name))
      );
      // compare breed names from list to input and store matched indicies in array
      const filteredBreedsIdx = [];
      miniBreedStrArr.forEach((breedName, idx) => {
        if (!(miniInputStr.length === 3 && /\s/g.test(miniInputStr))) {
          if (breedName.charAt(0)=== miniInputStr.charAt(0) && (breedName.includes(miniInputStr) || breedName.replaceAll("-", " ").includes(miniInputStr))) {
            filteredBreedsIdx.push(idx);
          }
        }
      });

      // match breed objects from initial api list to matched indicies from above
      // store matches in array
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
  }

  // handles logic of user submitting search input value when pressing enter or clicking
  // on search icon
  // checks to see if there is one breed left in filtered list and, if so, updates
  // the selected breed object with that breed
  // go to details page to see selected breed using navigate
  // probably better to do a more direct string comparison between input value
  // and available breeds
  function handleSearchSubmit(e) {
    if (
      (e.key === "Enter" || e.target.id === "search-icon") &&
      breedListFiltered.breedObjects.length === 1
    ) {
      const selectedBreedId = breedListFiltered.breedIds[0];
      setSelectedBreedObj(breedList[selectedBreedId]);
      navigate("/details");
    }
  }

  // minifying string function taking in some string as argument
  // uses a regular expression to match only alphabet characters
  // uses string concatenation to combine matched letters into string variable
  // returns 'minified' string in lower case
  function minifyString(str) {
    str = str.trim();
    const miniStrArr = str.match(/^[A-Za-z]+-*[A-Za-z]*\s*[A-Za-z]*-*[A-Za-z]*\s*[A-Za-z]*-*[A-Za-z]*\s*$/);
    if (str !== "" && miniStrArr !== null) {
      let miniStr = "";
      miniStrArr.forEach((letter) => (miniStr += letter));
      return miniStr.toLowerCase();
    } else {
      return "";
    }
    // else maybe give an error msg to user to enter a breed name
  }

  return (
    <div>
      <StyledInput>
        <input
          onChange={handleChange}
          onKeyDown={handleSearchSubmit}
          className="input-btn"
          placeholder="Search"
        />
        <FaSearch id="search-icon" onClick={handleSearchSubmit} />
      </StyledInput>
      {isModalOpen && (
        <Modal breedListFiltered={breedListFiltered} onClick={handleClick} />
      )}
    </div>
  );
}

export { Input };
