import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import ListView from '../pages/ListView';
import Store from '../pages/Store';
import MapView from '../pages/MapView';
import Catering from '../pages/Catering';
import About from '../pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="list" element={<ListView />} />
          {/* <Route path='map' element={<MapView />} /> */}
          <Route path="store" element={<Store />} />
          {/* <Route path="catering" element={<Catering />} /> */}
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
