import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./login/Register";
import { AuthProvider } from "./contexts/AuthContext";
import Button from "./button/button";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <>
          <Button text={"Register"} width={10} height={2.5} fontSize={1} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
