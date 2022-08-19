import { React, useState, useEffect, createContext } from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { Details } from './pages/Details';
import { TopSearch } from './pages/TopSearch/component';

export const UserContext = createContext(null);

function App() {
  // state logic
  // selectedBreedObj state would not update it seemed so kept getting empty array
  // was trying to go to 'details' endpoint from outside app
  // once I made Link to go to page from within app (logo) it worked
  const [breedList, setBreedList] = useState([]);
  const [selectedBreedObj, setSelectedBreedObj] = useState({});
  const [breedImgs, setBreedImgs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // check out other authorization methods
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds?api_key=8ecb9680-1e4f-44b7-b4c9-5919289455fe')
    .then(res => res.json())
    .then(breedsResponse => {
      setBreedList(breedsResponse);
    })
  }, []);

  const breedId = selectedBreedObj.id;
  // get 'selected breed' extra images
  // is state necessary here?
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${breedId}&api_key=8ecb9680-1e4f-44b7-b4c9-5919289455fe`)
    .then(res => res.json())
    .then(breedImgsResponse => {
      setBreedImgs(breedImgsResponse);
    })
  }, [breedId])

  function handleClick(e) {
    if (isModalOpen && (e.target.className !== 'modal-item')){
      setIsModalOpen(false);
    }
  }

  return (
    <div onClick={handleClick}>
      <UserContext.Provider value={{selectedBreedObj, setSelectedBreedObj, breedImgs, isModalOpen, setIsModalOpen}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" index element={<Home breedList={breedList} />} />
              <Route path="/details" element={<Details selectedBreedObj={selectedBreedObj} breedImgs={breedImgs}/>} />
              <Route path="/topsearch" element={<TopSearch />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;