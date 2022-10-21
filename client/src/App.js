import { React, useState, useEffect, createContext, useCallback } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Global/Layout";
import { Home } from "./pages/Home/component";
import { Details } from "./pages/Details";
import { TopSearch } from "./pages/TopSearch/component";

export const UserContext = createContext(null);

function App() {
  //hooks
  const [breedList, setBreedList] = useState([]);
  const [selectedBreedObj, setSelectedBreedObj] = useState({});
  const [breedImgs, setBreedImgs] = useState([]);
  const [isInResultsOpen, setIsInResultsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowDimenion, detectW] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);
  const [reqError, setReqError] = useState(null);

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
      setBreedList(breedsData);
    } catch (err) {
      setReqError(err.message);
    }

    setIsLoading(false);
  }, []);

  const fetchBreedImgsHandler = useCallback(async () => {
    try {
      const breedImgsRes = await fetch(`http://localhost:5000/${breedId}`, {
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
  }, [breedId]);

  useEffect(() => {
    fetchBreedsHandler();
  }, []);

  useEffect(() => {
    fetchBreedImgsHandler();
  }, [fetchBreedImgsHandler]);

  //functions
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
              <Route path="/" index element={<Home />} />
              <Route
                path="/details"
                element={<Details breedImgs={breedImgs} />}
              />
              <Route path="/topsearch" element={<TopSearch />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
