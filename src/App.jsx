import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./login/Register";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./header/header";




function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <>
        <div className="layout">
          <Header title="StayNest" /> 
          
          <Home />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          </div>
        </>
      </AuthProvider>
    </BrowserRouter>
  
  );
}

export default App;
