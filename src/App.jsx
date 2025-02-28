import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedBackground from './Components/AnimatedBackground';
import HomePage from './Pages/HomePage';
import ApologyForm from './Components/ApologyForm';
import ApologyDetail from './Components/ApologyDetail';
import AdminLogin from './Pages/AdminLogin';
import AdminPanel from './Pages/AdminPanel';

const App = () => {
  return (
    <AnimatedBackground>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-apology" element={<ApologyForm />} />
          <Route path="/apology/:id" element={<ApologyDetail />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </Router>
    </AnimatedBackground>
  );
};

export default App;
