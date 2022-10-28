import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile.js';
import About from './About/About';
import { BrowserRouter,Routes,Route,MemoryRouter,Link} from 'react-router-dom';

function Routercomponent (){
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="Profile" element={<Profile/>}></Route>
    <Route path="About" element={<About/>}></Route>
  </Routes>
  </BrowserRouter>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

    <Routercomponent />

);


