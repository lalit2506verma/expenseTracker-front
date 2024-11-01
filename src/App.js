import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp/SignUp';


function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>

    </>
  );
}

export default App;
