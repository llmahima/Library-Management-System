import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routers from './utils/Routers';

const App = () => {
  return (
    <BrowserRouter>   
         <Header />
         <Sidebar />
         <Routers/>
    </BrowserRouter>
   
  );
};

export default App;
