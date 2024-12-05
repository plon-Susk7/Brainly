import { Body } from './components/Body';
import { RecoilRoot } from 'recoil';
import './App.css'
import { Login } from './components/Login';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route
              path="/"
              element={localStorage.getItem('authorization') ? <Body/> : <Navigate to="/login" replace/>}
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  )
}

export default App;
