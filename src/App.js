import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignInPage from './pages/SignIn/SignInPage';


function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignInPage />} />
      </Routes>

    </>
  );
}

export default App;
