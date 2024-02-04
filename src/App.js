import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import 'normalize.css';
import VideoContainer from './pages/Container/ContainerVideo/ContainerVideo'

import Header from "./pages/Header/Header";
import Container from "./pages/Container/Container";
import Footer from "./pages/Footer/Footer";


function App() {
  return (
    <div className="App">
    <Header />
    <VideoContainer />
    <Container />
    <Footer />

    </div>
  );
}

export default App;
