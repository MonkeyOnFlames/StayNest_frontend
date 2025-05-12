import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./login/Register";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./header/header";
import Footer from "./footer/Footer";
import EnvironmentButton from "./environmentButton/environmentButton";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <>
        <div className="layout">
        <EnvironmentButton 
        environments={
          [
            "BIKE"]
        }/>
           <EnvironmentButton 
        environments={
          [
            "CHARGE_POST"]
        }/>
             <EnvironmentButton 
        environments={
          [
            "KWH"]
        }/>
             <EnvironmentButton 
        environments={
          [
            "RECYCLE"]
        }/>
             <EnvironmentButton 
        environments={
          [
            "SOLAR_POWER"]
        }/>

          <Header /> 
          
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          
          <Footer  />
          </div>
        </>
      </AuthProvider>
    </BrowserRouter>
  
  );
}

export default App;
