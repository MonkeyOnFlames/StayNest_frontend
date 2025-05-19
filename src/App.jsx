import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./login/Register";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./header/header";
import Footer from "./footer/Footer";
import CreateListingPage from "./createListingPage/createListingPage";
import SpecificListingPage from "./specificListingPage/SpecificListingPage"



function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <>
        <div className="layout">
        

          <Header /> 
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/createListing" element={<CreateListingPage />} />
            {/* found info on this site: https://reactrouter.com/start/declarative/routing */}
            <Route path="/listings"><Route path=":id" element={<SpecificListingPage />}/></Route>
          </Routes>
          
          
          <Footer  />
          </div>
        </>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
