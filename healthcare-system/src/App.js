import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './patient/pages/Login';
import ForgotPassword from "./patient/pages/ForgotPassword";
import Otp from './patient/pages/Otp';
import ResetPwd from './patient/pages/ResetPwd';
import Registration from './patient/pages/Registration';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path='/Otp' element={<Otp/>} />
        <Route path='/ResetPwd' element={<ResetPwd/>} />
        <Route path='/Registration' element={<Registration/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
