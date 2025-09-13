
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup.js';
import Home from './pages/home.js';
import Signin from './pages/signin.js';


function App() {
  return (
    <div className="App">
   <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
