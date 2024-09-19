import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import home from "./pages/home";
import shop from "./pages/shop";
import table from "./pages/table";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={home} />
            <Route  path="/shop" Component={shop} />
                   <Route  path="/tables" Component={table} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
