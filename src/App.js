import {Route, Routes} from "react-router-dom";
import AddPage from "./pages/AddPage";
import React from "react";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/add" element={<AddPage/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
