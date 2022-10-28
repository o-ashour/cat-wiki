import { React, useState, useEffect, createContext, useCallback } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Global/Layout";
import { Home } from "./pages/Home/component";
import { Details } from "./pages/Details";
import { TopSearch } from "./pages/TopSearch/component";
import _ from "lodash";
import failSafeCat from "./assets/images/cat_tea.jpg";

export const UserContext = createContext(null);

function App() {
  //hooks
  const [breedList, setBreedList] = useState([]);
  const [selectedBreedObj, setSelectedBreedObj] = useState({});
  const [breedImgs, setBreedImgs] = useState([]);
  const [topBreedList, setTopBreedList] = useState([]);
  const [isInResultsOpen, setIsInResultsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowDimenion, detectW] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);
  const [reqError, setReqError] = useState(null);

  // console.log('this happens');
  const breedId = selectedBreedObj.id;

  // maybe rethink this as it might be adding bugs
  // which are hard to trace
  // maybe too many quick re-renders, api requests
  const detectSize = () => {
    detectW(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    // when the window is wider than the small-screen breakpoint..
    if (windowDimenion > 601) {
      setIsModalOpen(false);
    }

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  const fetchBreedsHandler = useCallback(async () => {
    setIsLoading(true);
    setReqError(null);

    try {
      const breedsRes = await fetch("http://localhost:5000/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!breedsRes.ok) {
        throw new Error("Something went wrong!");
      }

      const breedsData = await breedsRes.json();
      const sortedBreedsData = _.sortBy(breedsData, ["name"]);
      setBreedList(sortedBreedsData);
    } catch (err) {
      setReqError(err.message);
    }
    setIsLoading(false);
  }, []);

  const fetchBreedImgsHandler = useCallback(async () => {
    try {
      const breedImgsRes = await fetch(`http://localhost:5000/${breedId}/8`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!breedImgsRes.ok) {
        throw new Error("Something went wrong!");
      }

      const breedImgsData = await breedImgsRes.json();
      setBreedImgs(breedImgsData);
    } catch (err) {
      console.log(err);
    }
  }, [selectedBreedObj]);

  function getTopBreeds() {
    const slimBreedList = [];

    breedList.forEach(async (breed) => {
      const slimBreedObj = {
        id: breed.id,
        name: breed.name,
        description: breed.description,
        imageUrl: breed.imageUrl ? breed.imageUrl : failSafeCat,
        search_score: breed.search_score,
      };

      slimBreedList.push(slimBreedObj);
    });

    // sort by score
    slimBreedList.sort(function (x, y) {
      return y.search_score - x.search_score;
    });

    setTopBreedList(slimBreedList.slice(0, 10));
  }

  useEffect(() => {
    fetchBreedsHandler();
  }, []);

  useEffect(() => {
    fetchBreedImgsHandler();
  }, [fetchBreedImgsHandler]);

  useEffect(() => {
    getTopBreeds();
  }, [breedList]);

  //functions
  //not all functions are under here
  function handleClick(e) {
    if (
      isInResultsOpen &&
      e.target.parentElement.id !== "input" &&
      e.target.id !== "input-results" &&
      e.target.parentElement.id !== "search-icon" &&
      !isModalOpen
    ) {
      setIsInResultsOpen(false);
    }
    if (
      (e.target.parentElement.id === "input" ||
        e.target.parentElement.id === "search-icon") &&
      windowDimenion < 601
    ) {
      setIsModalOpen(true);
    }
  }

  return (
    <div onClick={handleClick}>
      <UserContext.Provider
        value={{
          selectedBreedObj,
          setSelectedBreedObj,
          breedImgs,
          isInResultsOpen,
          setIsInResultsOpen,
          breedList,
          setBreedList,
          isModalOpen,
          setIsModalOpen,
          windowDimenion,
          isLoading,
          reqError,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/"
                index
                element={
                  <Home topBreedList={topBreedList} breedImgs={breedImgs} />
                }
              />
              <Route
                path="/details"
                element={<Details breedImgs={breedImgs} />}
              />
              <Route
                path="/topsearch"
                element={
                  <TopSearch
                    topBreedList={topBreedList}
                    breedImgs={breedImgs}
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
