import './App.css';
import React from 'react';
import Clock from "./Clock";

function App() {

  document.title = "JsClock in variable style";

  return (
    <div className="App-header">
      <Clock/>
    </div>
  );
}

export default App;
