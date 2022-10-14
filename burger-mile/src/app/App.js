import { BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='page'>
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
