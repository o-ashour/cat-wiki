import { FaSearch } from "react-icons/fa";
import { StyledInput } from "./style";
import { React, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { InputResults } from "./InputResults/component";

function Input({ id }) {
  // hooks
  const {
    setSelectedBreedObj,
    isInResultsOpen,
    setIsInResultsOpen,
    breedList,
    setBreedList,
    isModalOpen,
    setIsModalOpen,
    isLoading,
    reqError,
    env,
  } = useContext(UserContext);
  const [breedListFiltered, setBreedListFiltered] = useState({
    breedObjects: breedList,
    breedIds: breedList.map((breed, idx) => idx),
  });
  const [arrowVar, setArrowVar] = useState({ value: -1, isChanged: false });
  const [isError, setIsError] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const navigate = useNavigate();

  // will vary depending on 'development' or 'production' environment
  const apiUrl = env === "production" ? "/api/breeds" : "http://localhost:5000";

  useEffect(() => {
    setInputStr("");
  }, [isModalOpen]);

  const updateBreedScore = async (breedId) => {
    try {
      // post request to server incrementing search score for selected breed
      const response = await fetch(`${apiUrl}/update/${breedId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Breed score update request failed.");
      }

      const updatedBreedsData = await response.json();
      setBreedList(updatedBreedsData);
    } catch (err) {
      console.log(err);
    }
  };
  // handles logic of clicking on item in search results
  function handleClick(e) {
    const selectedBreedId = e.target.id;

    updateBreedScore(selectedBreedId);

    setSelectedBreedObj(breedList[selectedBreedId]);
    setIsModalOpen(false);
  }

  // handles changes in input field
  function handleChange(e) {
    setInputStr(e.target.value);
    setArrowVar({ value: -1, isChanged: false });
    setIsError(false);
  }

  useEffect(() => {
    // value from input is checked as a valid breed-name
    let validInputStr = validateInput(inputStr);
    // closes and initializes modal by checking if input field is blank
    if (validInputStr === "") {
      setIsInResultsOpen(false);
      setBreedListFiltered({
        breedObjects: breedList,
        breedIds: breedList.map((breed, idx) => idx),
      });
      // when there is some input..
    } else if (!isError) {
      // modal should appear
      setIsInResultsOpen(true);
      // update search results displayed in modal
      updateModalList(validInputStr);
    }
  }, [inputStr]);

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
      setIsInResultsOpen(false);
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
      !(
        arrowVar.value >= breedListFiltered.breedObjects.length - 1 ||
        arrowVar.value > 3
      )
    ) {
      setArrowVar((prevState) => {
        return { value: prevState.value + 1, isChanged: true };
      });
      // decrement value for arrow variable as long as value is more than 0
      // stops navigation at first item in list
    } else if (e.key === "ArrowUp" && !(arrowVar.value <= 0)) {
      setArrowVar((prevState) => {
        return { value: prevState.value - 1, isChanged: true };
      });

      // navigates to appropriate breed details page when item is selected from list with arrows
      // and enter is pressed
    } else if (e.key === "Enter" && arrowVar.value > -1) {
      const selectedBreedId = breedListFiltered.breedIds[arrowVar.value];
      setSelectedBreedObj(breedList[selectedBreedId]);
      updateBreedScore(selectedBreedId);
      navigate("/details");
      setIsModalOpen(false);
      // finds match for keyed-in search and goes to appropriate page if matches on enter
    } else if (e.key === "Enter") {
      const inputStr = validateInput(e.target.value);
      const selectedBreedId = breedList.findIndex(
        (breed) =>
          validateInput(breed.name) === inputStr ||
          validateInput(breed.name.replaceAll("-", " ")) === inputStr
      );
      if (selectedBreedId !== -1) {
        setSelectedBreedObj(breedList[selectedBreedId]);
        updateBreedScore(selectedBreedId);
        navigate("/details");
        setIsModalOpen(false);
      } else if (!isLoading && !reqError) {
        setIsInResultsOpen(false);
        setIsError(true);
      }
    }
  }

  function handleBlur() {
    setIsError(false);
  }

  // matches expected breed-name string format based on regex
  function validateInput(str) {
    const trimmedStr = str.trim();
    // regex for checking whether typed cat breed name in search is valid
    //valid name is a noun made of 1-4 words with possible hyphenation for compound names
    const regex =
      /^[A-Za-z]+-*[A-Za-z]*\s*[A-Za-z]*-*[A-Za-z]*\s*[A-Za-z]*-*[A-Za-z]*\s*$/;
    const strArr = trimmedStr.match(regex);
    if (strArr !== null) {
      return strArr[0].toLowerCase();
    } else {
      return "";
    }
  }

  let content = "";

  if (breedList.length === 0 && !reqError) {
    content = (
      <p>
        No breeds to search right now...<small>try again later</small>
      </p>
    );
  }

  if (
    ((isInResultsOpen && isModalOpen) || (isInResultsOpen && !isModalOpen)) &&
    breedList.length > 0
  ) {
    content = (
      <InputResults
        arrowVar={arrowVar}
        breedListFiltered={breedListFiltered}
        onClick={handleClick}
      />
    );
  }

  if (reqError) {
    content = <p>{reqError}</p>;
  }

  if (isLoading) {
    content = (
      <p>
        Retrieving breeds...<small>please wait</small>
      </p>
    );
  }

  return (
    <div className="input-search">
      <StyledInput id="input" isModalOpen={isModalOpen}>
        <label htmlFor="input-btn"></label>

        {id === "modal-input" ? (
          <input
            id="modal-input"
            className="input-btn"
            placeholder="Search"
            value={inputStr}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
        ) : (
          <input
            id="main-input"
            className="input-btn"
            placeholder="Search"
            value={inputStr}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
        )}

        <FaSearch id="search-icon" />
      </StyledInput>

      <div className={reqError ? "error-message" : "state-message"}>
        {content}
      </div>
      {isError && (
        <div className="error-message">
          <p>No match. Try again.</p>
        </div>
      )}
    </div>
  );
}

export { Input };
