
import './App.css'
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Singlemovie from "./pages/Singlemovie";
import Results from "./pages/Results";
import Displayerror from "./pages/Displayerror";

function App() {


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Singlemovie />} />
        <Route path="/movie/search/:movieName" element={<Results />} />
        <Route path="*" element={<Displayerror />} />
      </Routes>
    </>
  );
}

export default App
