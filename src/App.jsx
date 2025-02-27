import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ApologyDetail from './Components/ApologyDetail';
import AdminLogin from './Pages/AdminLogin';
import AdminPanel from './Pages/AdminPanel';
import ApologyForm from './Components/ApologyForm';
import AdminRoute from './Components/AdminRoute'; // <-- Make sure this exists

const App = () => {
  // For example, you might get currentUser from context, or from a global state
  const currentUser = {
    // Example user object; in real code, you'd get this from your auth provider
    isAdmin: true,
  };

  return (
    <div
      className="
        min-h-screen
        bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%221440%22%20height%3D%22560%22%20viewBox%3D%220%200%201440%20560%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22grad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%23E0F7FA%3Bstop-opacity%3A1%22/%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%23F8BBD0%3Bstop-opacity%3A1%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width%3D%221440%22%20height%3D%22560%22%20fill%3D%22url(%23grad)%22/%3E%3C/svg%3E')]
        bg-cover
        bg-no-repeat
      "
    >
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/create-apology" element={<ApologyForm />} />
          <Route path="/apology/:id" element={<ApologyDetail />} />

          {/* Admin Login */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Protected Admin Route */}
          <Route
            path="/admin-panel"
            element={
              <AdminRoute user={currentUser}>
                <AdminPanel />
              </AdminRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
