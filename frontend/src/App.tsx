import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes,  Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from './page/layout';
import Login from './page/login';
import Register from './page/register';
import config from './config';
import { responsiveFontSizes } from '@material-ui/core';

function App() {
  //console.log("test",config.BACK_URL);
  
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/*" element={<Layout />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
