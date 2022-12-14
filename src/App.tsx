import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './styles/global.css';
import Correctarium from "./components/pages/Correctarium/Correctarium";
import Main from "./components/pages/Main/Main";

function App() {

  return (
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/correctarium' element={<Correctarium />} />
      </Routes>
  );
}

export default App;
