
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup.js';
import Home from './pages/home.js';
import Signin from './pages/signin.js';
import { useState } from 'react';
import RefrshHandler from '../src/refreshHandler.js';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/signin" />
  }


  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Navigate to="/signin" />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </div>
  );
}

export default App;
