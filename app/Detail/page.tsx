'use client'

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Footer } from "@/components/footer/Footer";
import { DetailHeader } from "@/components/DetailHeader";
import { CarDetails } from "@/components/carDetails/CarDetails";
import { Button } from "@/components/ui/button";
import { Reviews } from "@/components/reviews/Reviews";
import { DetailCards } from "@/components/DetailCards";

const HomePage = () => {
  // State to manage sidebar open/close
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div >
        <nav>
      {/* Navbar */}
      <Navbar onToggleSidebar={toggleSidebar} />
</nav>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main
        className={`ml-0 transition-all duration-300 ease-in-out m-12  ${
          isSidebarOpen ? "ml-64" : "ml-12" // Shift content to the right when sidebar is open
        }`}
      >
        <div className="flex gap-8">
          {/* Left Section - DetailHeader */}
          <div className="flex-none w-7/12">
            <DetailHeader />
          </div>

          {/* Right Section - CarDetails */}
          <div className="flex-grow">
            <CarDetails />
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-9">
          <Reviews />
        </div>

        {/* Car Rental Section */}
        <div>
          <DetailCards />
        </div>

        {/* Show More Button */}
        <div className="flex justify-center items-center mt-8 text-white m-10">
          <Button className="bg-primary-500 p-4">Show more car</Button>
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
