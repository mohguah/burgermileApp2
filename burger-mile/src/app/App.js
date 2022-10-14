import React from 'react';
// import NavBar from '../components/NavBar';
import RoutesMapper from './Routes';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (

    <BrowserRouter>
      <div>
        <RoutesMapper />
      </div>
    </BrowserRouter>

  );
}

export default App;
