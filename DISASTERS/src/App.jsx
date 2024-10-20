import { Button } from './Components/Common/button'
import { Card } from './Components/Common/card'
import { Card2 } from './Components/Common/card2'
import { Search } from './Components/Common/search'
import { Dashboard } from './Components/Dashboard'
import { Incidents } from './Components/Incidents'
import { Location } from './Components/Location'
import Navbar from './Components/Navbar'
import { Step1 } from './Components/step1'
import { Step2 } from './Components/step2'
import { Step3 } from './Components/step3'
import { Step4 } from './Components/step4'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      {/* <Dashboard /> */}
      {/* <Incidents /> */}
      {/* <Step1/> */}
      {/* <Step2/> */}
      {/* <Step3/> */}
      {/* <Step4/> */}
      <Location/>
    </>
  )
}

export default App
