import React from 'react';
// import NavBar from '../components/NavBar';
import RoutesMapper from './Routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from '../components/NavBar';
import { Switch } from '@mui/material';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import ListView from '../pages/ListView';
import Store from '../pages/Store';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="list" element={<ListView />} />
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
