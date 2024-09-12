import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import BestSeller from "./pages/BestSeller";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Contactus from "./pages/Contactus";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/bestseller" element={<BestSeller />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<Contactus />} />
          
        
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
