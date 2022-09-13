import { React, useState, useEffect, createContext, useCallback } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/component";
import { Home } from "./pages/Home/component";
import { Details } from "./pages/Details";
import { TopSearch } from "./pages/TopSearch/component";

export const UserContext = createContext(null);

function App() {
  //hooks
  const [breedList, setBreedList] = useState([]);
  const [selectedBreedObj, setSelectedBreedObj] = useState({});
  const [breedImgs, setBreedImgs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRealOpen, setIsModalRealOpen] = useState(false);
  const [windowDimenion, detectW] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);
  const [reqError, setReqError] = useState(null);

  const breedId = selectedBreedObj.id;
  const apiKey = "8ecb9680-1e4f-44b7-b4c9-5919289455fe";
  const breedsUrl = `https://api.thecatapi.com/v1/breeds`;
  const breedImgsUrl = `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${breedId}&api_key=${apiKey}`;

  // maybe rethink this as it might be adding bugs
  // which are hard to trace
  // maybe too many/too quick re-renders / api requests
  const detectSize = () => {
    detectW(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    if (windowDimenion > 601) {
      setIsModalRealOpen(false);
    }

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  const fetchBreedsHandler = useCallback(async () => {
    setIsLoading(true);
    setReqError(null);

    try {
      const breedsRes = await fetch(breedsUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      });
      const breedImgsRes = await fetch(breedImgsUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        }
      });
      if (!breedsRes.ok || !breedImgsRes.ok) {
        throw new Error("Something went wrong!");
      }
      console.log(breedsRes.status);
      console.log(breedImgsRes.status);
      const breedsData = await breedsRes.json();
      setBreedList(breedsData);
      const breedImgsData = await breedImgsRes.json();
      setBreedImgs(breedImgsData);
    } catch (error) {
      setReqError(error.message);
    }
    setIsLoading(false);
  }, [breedId]);

  useEffect(() => {
    fetchBreedsHandler();
  }, [fetchBreedsHandler]);

  //functions
  function handleClick(e) {
    if (
      isModalOpen &&
      e.target.parentElement.id !== "input" &&
      e.target.id !== "modal" &&
      e.target.parentElement.id !== "search-icon" &&
      !isModalRealOpen
    ) {
      setIsModalOpen(false);
    }
    if (
      (e.target.parentElement.id === "input" ||
        e.target.parentElement.id === "search-icon") &&
      windowDimenion < 601
    ) {
      setIsModalRealOpen(true);
    }
  }

  return (
    <div onClick={handleClick}>
      <UserContext.Provider
        value={{
          selectedBreedObj,
          setSelectedBreedObj,
          breedImgs,
          isModalOpen,
          setIsModalOpen,
          breedList,
          setBreedList,
          isModalRealOpen,
          setIsModalRealOpen,
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
