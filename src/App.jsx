import "./App.css";
import { Register } from "./pages/register/register";
import { Login } from "./pages/login/login";
import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
// import Footer from "./pages/Footer/Footer";


function App() {
  return (
    <>
     

      <Routes>
      {/* <Route path='/' element={<Footer/>}/> */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        
      </Routes>
    </>
  );
}

export default App;
