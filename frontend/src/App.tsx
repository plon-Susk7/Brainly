
import { Button } from './components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import './App.css'

function App() {

  return (
    <>
      <Button variant="primary" size="md" onClick={()=>{}} text={"Add Content"} startIcon={<FontAwesomeIcon icon={faPlusSquare}/>}/>
    </>
  )
}

export default App
