
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login.js';
import Signup from './pages/signup.js';
import Home from './pages/home.js';


function App() {
  return (
    <div className="App">
   <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
