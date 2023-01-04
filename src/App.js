import "./App.css";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/NotFound";
import About from "../src/Components/About/About";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
