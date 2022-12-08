import './App.css';
import Topbar from "./components/topbar/topbar";
import Home from "./pages/Home/Home";
import Login from './pages/login/login';
import Register from './pages/register/register';
import Setting from './pages/settings/setting';
import Single from './pages/single/single';
import Write from './pages/write/write';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const {user}=useContext(Context);
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/login' element={user?<Home/>:<Login/>}/>
        <Route path='/register' element={user ?<Home/>:<Register/> }/>
        <Route path='/write' element={user?<Write/>:<Register/>}/>
        <Route path='/settings' element={user?<Setting/>:<Register/>}/>
        <Route path='/post/:postId' element={<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
