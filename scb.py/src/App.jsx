import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AccountSettings from "./pages/AccountSettings";
import TransferForm from "./pages/TransferForm";
import TransactionHistory from "./pages/TransactionHistory";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <>
        {user && <Navbar user={user} onLogout={handleLogout} />}
        <Routes>
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Home user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account-settings"
            element={
              <ProtectedRoute user={user}>
                <AccountSettings user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transfer"
            element={
              <ProtectedRoute user={user}>
                <TransferForm user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/history"
            element={
              <ProtectedRoute user={user}>
                <TransactionHistory user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
