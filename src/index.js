import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import App from './App';
import Details from './Details';
import TopSearch from './TopSearch';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<App />} />
          <Route path="details" element={<Details />} />
          <Route path="/topsearch" element={<TopSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// <App />
