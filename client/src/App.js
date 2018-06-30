import React, { Component } from 'react';
import logo from './logo.svg';                      // Change this - DLO
import './App.css';
import Container from "./components/Container";
import Header from "./components/Header";
import Expenses from "./components/Expenses";

class App extends Component {
  render() {
    return (
    <Container> 
      <Header />
      <Expenses />
      </Container>
    );
  }
}

export default App;
