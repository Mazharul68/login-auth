import './App.css';
import Login from './components/Login/Login';
import Contact from './components/Header/Contact/Contact'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div >
      <Header ></Header>
     <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="signup" element={<SignUp />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>
    </div>
  );
}

export default App;
