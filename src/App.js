import "./App.css";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../src/Components/About/About";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
