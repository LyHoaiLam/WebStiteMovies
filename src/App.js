import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import 'normalize.css';
import VideoContainer from './pages/Container/ContainerVideo/ContainerVideo'
import css from './App.css'
import Header from "./pages/Header/Header";
import Container from "./pages/Container/Container";
import Footer from "./pages/Footer/Footer";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Watch from "./pages/watchMovie/Watch";
import MovieCategory from "./pages/MovieCategory/movieCategory";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' exact element={<Container />}></Route>
          <Route path='/movie-category' element={<MovieCategory />}></Route>
          <Route path='/watch/:id' element={<Watch />}></Route>
        </Routes>    
          <Footer className="min-height" />
      </div>
    </Router>
  );
}

export default App;
