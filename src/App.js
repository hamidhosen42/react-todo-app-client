import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './Component/Login/Login';
import Navbar from './Component/Shared/Navbar';

function App() {
  return (
    <div className="className=' max-w-7xl mx-auto'">
      <Navbar></Navbar>
      <Routes>
        <Route path="login" element={<Login></Login>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
