
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { Body } from './components/Body';
import { RecoilRoot } from 'recoil';
import './App.css'

function App() {
  return (
    <>
      <RecoilRoot>
        <Sidebar />
        <Navbar/>
        <Body/>
      </RecoilRoot>
    </>
  )
}

export default App;
