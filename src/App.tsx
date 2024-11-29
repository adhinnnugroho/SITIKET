import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/home/HomePage';
import ProfilePage from 'pages/profile/ProfilePage';
import TiketPage from 'pages/tiket/TiketPage';
import PesawatActions from 'pages/menu/pesawat/PesawatActions';
import KeretaActions from 'pages/menu/kereta/KeretaActions';
import ChangePassword from 'pages/profile/CrudPage/ChangePassword';
import UpdateProfile from 'pages/profile/CrudPage/UpdateProfile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/ticket" element={<TiketPage />} />
        <Route path="/pesan-tiket-pesawat" element={<PesawatActions />} />
        <Route path="/pesan-tiket-kereta" element={<KeretaActions />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  )
}

export default App
