import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import MapImage from "./Components/MapImage";
import Category from "./Components/Category";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={ <MapImage /> } />
          <Route path="/category" exact element={ <Category /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
