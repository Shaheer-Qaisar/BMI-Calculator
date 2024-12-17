import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Option from "./components/option";
import BmiCalculator from "./components/BMI/BmiCalculator";
import Fitness from "./components/fitness";
import Loginform from "./components/loginform";
function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
          <Route path="/bmi" element={<BmiCalculator />} /> 
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/" element={<Option/>} />
          <Route path="/loginform" element={<Loginform/>} />
      </Routes></BrowserRouter>
    </>
  );
}

export default App;
