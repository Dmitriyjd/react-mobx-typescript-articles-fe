import React from 'react';
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

import './App.css';
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Routes/>
    </div>
  );
}

export default App;
