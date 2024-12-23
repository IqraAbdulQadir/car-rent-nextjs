"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Footer } from "@/components/footer/Footer";
import { CarRentalHero } from "@/components/carRental/CarRentalHero";
import { CarCard } from "@/components/carRental/CarCard";
import { SectionHeader } from "@/components/carRental/SectionHeader";
import { CarRentalPage } from "@/components/carRental/CarRentalPage";
import {Button} from "@/components/ui/button"

const HomePage = () => {
  // State to manage sidebar open/close
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar onToggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main
        className={`ml-0 transition-all duration-300 ease-in-out m-12  ${
          isSidebarOpen ? "ml-64" : "ml-12" // Shift content to the right when sidebar is open
        }`}
      >
        {/* Hero Section */}
        <div >
          <CarRentalHero />
        </div>

        {/* Car Rental Section */}
        <div>
          <CarRentalPage />
        </div>

        <div className="flex justify-center items-center mt-8 text-white m-10">
    <Button className="bg-primary-500 p-4" >Show more car</Button>
  </div>
      </main>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
