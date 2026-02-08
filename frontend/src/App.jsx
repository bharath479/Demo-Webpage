import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

export default function App() {
  const [admin, setAdmin] = useState(
    !!localStorage.getItem("token")
  );

  if (window.location.pathname === "/admin") {
    return admin ? <AdminDashboard /> : <AdminLogin onLogin={() => setAdmin(true)} />;
  }

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
