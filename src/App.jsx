import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './contexts/AuthContext.jsx';

// Layout
import Layout from './components/layout/Layout.jsx';
import DashboardLayout from './components/layout/DashboardLayout.jsx';

// Pages
import Home from './pages/Home.jsx';
import PropertyListings from './pages/PropertyListings.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AdminDashboard from './pages/dashboard/AdminDashboard.jsx';
import AgentDashboard from './pages/dashboard/AgentDashboard.jsx';
import LandlordDashboard from './pages/dashboard/LandlordDashboard.jsx';
import BuyerDashboard from './pages/dashboard/BuyerDashboard.jsx';
import AddProperty from './pages/dashboard/AddProperty.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import MortgageCalculator from './pages/MortgageCalculator.jsx';
import NotFound from './pages/NotFound.jsx';

// Protected Route Component
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';

function App() {
  const { isAuthenticated, userRole } = useAuth();

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="properties" element={<PropertyListings />} />
          <Route path="properties/:id" element={<PropertyDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mortgage-calculator" element={<MortgageCalculator />} />
        </Route>
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={
            userRole === 'admin' ? <AdminDashboard /> :
            userRole === 'agent' ? <AgentDashboard /> :
            userRole === 'landlord' ? <LandlordDashboard /> :
            <BuyerDashboard />
          } />
          <Route path="add-property" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} allowedRoles={['admin', 'agent', 'landlord']}>
              <AddProperty />
            </ProtectedRoute>
          } />
        </Route>
        
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;