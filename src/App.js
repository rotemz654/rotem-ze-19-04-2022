import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Weather from "./screens/Weather";
import Favorites from "./screens/Favorites";
import * as weatherAction from "./store/actions/weatherActions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Weather />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<Weather />} />
    </Routes>
  );
}

export default App;
