import './App.css';
import Headers from "./components/header/Header"
import Home from "./pages/home/Home"
import Edit from "./pages/edit/Edit"
import Profile from "./pages/profile/Profile"
import Register from "./pages/register/Register"
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Headers />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/edit/:id' element={<Edit />}></Route>
      <Route path='/userprofile/:id' element={<Profile />}></Route>
     </Routes>
    </div>
  );
}

export default App;
