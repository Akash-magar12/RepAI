import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/sonner";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen py-2 lg:px-8">
      <Toaster position="top-center" richColors duration={1000} />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
