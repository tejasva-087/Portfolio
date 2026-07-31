import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<AppLayout />}>
    //       <Route element={<HomePage />} index />
    //       <Route element={<MemoryMap />} path="/memory-map" />
    //       <Route element={<TriInk />} path="/memory-map" />
    //       <Route element={<Trackify />} path="/trackify" />
    //       <Route element={<RozgarDhundo />} path="/rozgar-dhundo" />
    //       <Route element={<RozgarDhundo />} path="/rozgar-dhundo" />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
