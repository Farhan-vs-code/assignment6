import { Button } from './Components/Common/button'
import { Card } from './Components/Common/card'
import { Search } from './Components/Common/search'
import { Dashboard } from './Components/Dashboard'
import { Incidents } from './Components/Incidents'
import Navbar from './Components/Navbar'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      {/* <Dashboard /> */}
      <Incidents />
    </>
  )
}

export default App
