import { Button } from './Components/Common/button'
import { Card } from './Components/Common/card'
import { Search } from './Components/Common/search'
import { Dashboard } from './Components/Dashboard'
import { Incidents } from './Components/Incidents'
import Navbar from './Components/Navbar'
import { Step1 } from './Components/step1'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      {/* <Dashboard /> */}
      {/* <Incidents /> */}
      <Step1/>
    </>
  )
}

export default App
