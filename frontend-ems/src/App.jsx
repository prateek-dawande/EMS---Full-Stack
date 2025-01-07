/* eslint-disable no-unused-vars */
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AddEmployee from "./employees/AddEmployee";
import EditEmployee from "./employees/EditEmployee";
import ViewEmployee from "./employees/ViewEmployee";
import Navbar from "./layout/Navbar"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  

  return (
    <>
    <Router>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addemployee" element={<AddEmployee/>}/>
        <Route path="/editemp/:id" element={<EditEmployee/>}/>
        <Route path="/viewemp/:id" element={<ViewEmployee/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
