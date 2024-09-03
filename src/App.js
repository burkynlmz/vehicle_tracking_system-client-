"use client"
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ListCar from './components/ListCar';
import ListService from "./components/ListService";
import Header from "./components/header";


function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<ListCar />} />
        <Route path="/service/:id" element={<ListService />} />
      </Routes>

    </>
  );
}

export default App;
