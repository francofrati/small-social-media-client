import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./views/login/login";

function App() {
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
