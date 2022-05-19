import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import RequireAuth from './Component/Login/RequireAuth';
import Navbar from './Component/Shared/Navbar';
import Todos from './Component/Todos/Todos';

function App() {
  return (
    <div className="className=' max-w-7xl mx-auto'">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path="/home" element={<Home />} />
        <Route
          path="todos"
          element={
            <RequireAuth>
              <Todos />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login></Login>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
