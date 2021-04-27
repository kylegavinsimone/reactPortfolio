import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About/index.js";
import Contact from "./components/Contact/index.js";
import Portfolio from "./components/Portfolio/index.js";
import Navbar from "./components/Navbar/index.js";
function App() {
  const [components, setComponents] = useState([
    <About />,
    <Contact />,
    <Portfolio />,
  ]);
  const [current, setCurrent] = useState(components[0]);
  return (
    <div className="App">
      <Navbar setCurrent={setCurrent} components={components} />
      {current}
    </div>
  );
}

export default App;
