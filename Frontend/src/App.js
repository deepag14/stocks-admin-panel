import "./App.css";
import { Home } from "./Profile/Home";
import Index from "./Profile/Index";
import Navigation from "./Profile/Navigation";
import { Route, Routes } from "react-router";
import { Stocks } from "./Profile/Stocks";
import { Addstocks } from "./Profile/Addstocks";
import { Managestocks } from "./Profile/Managestocks";
import { Editstocks } from "./Profile/Editstocks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/Home" element={<Home />}>
          <Route path="/Home/Navigation" element={<Navigation />} />
          <Route path="/Home/Stocks" element={<Stocks />} />
          <Route path="/Home/Addstocks" element={<Addstocks />} />
          <Route path="/Home/Managestocks" element={<Managestocks />} />
          <Route path="/Home/Editstocks/:id" element={<Editstocks />} />
        </Route>
      </Routes>
      <ToastContainer/>
        
    </div>
  );
}

export default App;
