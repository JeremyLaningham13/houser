import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import routes from "./routes";

// Components
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        {routes}
      </HashRouter>
    </div>
  );
}

export default App;
