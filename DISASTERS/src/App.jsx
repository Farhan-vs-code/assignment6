import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar'
import { Dashboard } from './Components/Dashboard'
import { Incidents } from './Components/Incidents'
import { Location } from './Components/Location'
import { Error } from "./Components/Error"
import { Step1 } from './Components/step1'
import { Step2 } from './Components/step2'
import { Step3 } from './Components/step3'
import { Step4 } from './Components/step4'
import './index.css'


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/Incidents" element={<Incidents />}/>
        <Route path="/Location" element={<Location />}/>
        <Route path="/Step1" element={<Step1 />}/>
        <Route path="/Step2" element={<Step2 />}/>
        <Route path="/Step3" element={<Step3 />}/>
        <Route path="/Step4" element={<Step4 />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
