import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import MemoryMapPage from "./pages/MemoryMapPage";
import TrackifyPage from "./pages/TrackifyPage";
import RozgaarDhundoPage from "./pages/RozgaarDhundoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/memory-map" element={<MemoryMapPage />} />
            <Route path="/trackify" element={<TrackifyPage />} />
            <Route element={<RozgaarDhundoPage />} path="/rozgar-dhundo" />
          </Route>
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
