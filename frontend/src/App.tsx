
// import { Button } from './components/Button'
// import { Sidebar } from './components/Sidebar';
import { ProjectCards } from './components/ProjectCards';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import './App.css'

function App() {

  return (
    <>
      {/* <Sidebar/> */}
      <ProjectCards title={"Project Ideas"} type={"tweets"} date={"19/12/2002"} description={'To add a fixed width and height to your card, you can apply the w- (width) and h- (height) utility classes from TailwindCSS to the outer div that represents your card. For example, you can use classes like w-[200px] for width and h-[300px] for height.Heres an updated version of your ProjectCards component with a fixed width and height added:'}/>
      {/* <Button variant="primary" size="md" onClick={()=>{}} text={"Add Content"} startIcon={<FontAwesomeIcon icon={faPlusSquare}/>}/> */}
      
    </>
  )
}

export default App
