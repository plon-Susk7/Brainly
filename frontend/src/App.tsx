import { Body } from './components/Body';
import { RecoilRoot } from 'recoil';
import './App.css'
import { Login } from './components/Login';

function App() {

  const data = localStorage.getItem('authorization');

  return (
    <>
      <RecoilRoot>
        {data && <Body/>}
        {!data && <Login/>}
      </RecoilRoot>
    </>
  )
}

export default App;
