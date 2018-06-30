import React, { Component } from 'react';
import logo from './logo.svg'; // Change this - DLO
import './App.css';
import Container from "./components/Container";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
    <Container> 
      <Header />
      </Container>
    );
  }
}

export default App;
