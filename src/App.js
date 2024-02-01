import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import 'normalize.css';

import Header from "./pages/Header/Header";
import Container from "./pages/Container/Container";

function App() {
  return (
    <div className="App">
    <Header />
    <Container />

    </div>
  );
}

export default App;
