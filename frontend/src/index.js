import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './landing_page/Navbar';
import SignUpPage from './landing_page/SignUp/SignUpPage';
import Login from './landing_page/Login/Login';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/Home/HomePage';
import AdminPage from './landing_page/Admin/Home/AdminPage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import DashboardPage from './dashboard_page/dashboard/DashboardPage';
import Navbardas from './dashboard_page/Navbardas';
import ProfilePage from './dashboard_page/profile/ProfilePage';


// Your Google Client ID (Replace with your actual client ID)
const GOOGLE_CLIENT_ID = '22490220352-9t0se8f4tkojusf4vo9s90skv583r457.apps.googleusercontent.com'


// Function to check authentication (Modify based on your authentication logic)
const isAuthenticated=()=>{
  const token = localStorage.getItem("token");

  if(!token) return null; //if either is missing,return null

  return{token};
}

// Private Route Component
const AdminRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <BrowserRouter>

      <Routes>

        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/price" element={<PricingPage />}></Route>
              <Route path="/admin" element={<AdminPage />}></Route>
              <Route path="/dashboard" element={<DashboardPage />}></Route>
            </Routes>
            <Footer />
          </>
        }
        />

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        

        <Route path="/dashboard/*" element={
          <AdminRoute>
          <>
            <Navbardas />
            <Routes>
              <Route path="/" element={<DashboardPage />}></Route>
              <Route path='/profile' element={<ProfilePage/>}></Route>
            </Routes>
            <Footer />
          </>
          </AdminRoute>
        }
        />

      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

