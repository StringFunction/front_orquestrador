import "./index.css"
import Conteiner from "../src/layout/Container"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Agendamento from "./pages/Agendamento"
import Rpa from "./pages/Rpa"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Home from "./pages/Home"
function App() {


  return (
    <>
    <BrowserRouter>

          <Routes> 
            <Route element={<Conteiner></Conteiner>}>
                <Route index path="/" element={<Home></Home>}></Route>
                <Route path="/Agendamento" element={<Agendamento></Agendamento>}></Route>
                <Route path="/Rpa" element={<Rpa></Rpa>}></Route>
                <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
            </Route>
            <Route path="/Login" element={<Login></Login>}></Route>
          </Routes>
   

        

    </BrowserRouter>
    </>
  )
}

export default App
