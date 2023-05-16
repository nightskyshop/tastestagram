import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import MapImage from "./Components/MapImage";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={ <MapImage /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
