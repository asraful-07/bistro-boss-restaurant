import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  const noHF = location.pathname.includes("login");
  return (
    <div className="flex flex-col min-h-screen">
      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Navbar */}
      <header>{noHF || <Navbar />}</header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>{noHF || <Footer />}</footer>
    </div>
  );
};

export default MainLayout;
