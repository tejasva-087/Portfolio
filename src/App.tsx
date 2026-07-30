import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MemoryMap from "./components/pages/MemoryMap";
import Trackify from "./components/pages/Trackify";
import RozgarDhundo from "./components/pages/RozgarDhundo";
import TriInk from "./components/pages/TriInk";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<HomePage />} index />
          <Route element={<MemoryMap />} path="/memory-map" />
          <Route element={<TriInk />} path="/memory-map" />
          <Route element={<Trackify />} path="/trackify" />
          <Route element={<RozgarDhundo />} path="/rozgar-dhundo" />
          <Route element={<RozgarDhundo />} path="/rozgar-dhundo" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
