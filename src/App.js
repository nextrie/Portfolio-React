import React from 'react';
import './App.css';
import "./Fonts.css";

//Components
import NavBar from "./Components/NavBar/NavBar.js";
import Header from "./Components/Header/Header.js";
export default class App extends React.Component {
  render()
  {
    return (
      <div className="appContainer">
          <NavBar />
          <div className="homeContainer">
            <Header />
          </div>
      </div>
    );
  }
}