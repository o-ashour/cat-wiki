import { React, useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { Details } from './pages/Details';
import { TopSearch } from './pages/TopSearch/component';

function App() {
  // state logic
  const [breedList, setBreedList] = useState([]);
  const [selectedBreedObj, setSelectedBreedObj] = useState({});


  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds?api_key=8ecb9680-1e4f-44b7-b4c9-5919289455fe')
    .then(res => res.json())
    .then(breedsResponse => {
      setBreedList(breedsResponse);
    })
  }, []);

  console.log(selectedBreedObj);

  return (
    <>
      // react router
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home breedList={breedList} setSelectedBreedObj={setSelectedBreedObj} />} />
            <Route path="details" element={<Details />} />
            <Route path="/topsearch" element={<TopSearch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;