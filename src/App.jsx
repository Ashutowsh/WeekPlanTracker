import React, { useContext } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Note from "./components/Note";
import Heading from "./components/Heading";
import { Route, Routes } from "react-router-dom";
// import { NoteContext } from "./context/NoteContext";
import UpdatedCards from "./components/UpdatedCard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RouteWrapper Page={<Home />} />} />
        <Route path="/note" element={<RouteWrapper Page={<Note />} />} />
        <Route
          path="/note1/:title/:content"
          element={<RouteWrapper Page={<UpdatedCards />} />}
        />
      </Routes>
    </>
  );
}

export default App;

function RouteWrapper({ Page }) {
  return (
    <div>
      <Heading />
      {Page}
      <Footer />
    </div>
  );
}
// path="/note1/:"+{formData.title}+"/:content"
