'use client'
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Footer } from "@/components/footer/Footer";
import  CategoryLocation from "@/components/CategoryLocation";
import { CategoryCards } from "@/components/CategoryCards";
import { Button } from "@/components/ui/button";

const CategoryPage = () => {
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
  className={`ml-0 transition-all duration-300 ease-in-out m-12 ${
    isSidebarOpen ? "ml-64" : "ml-12"
  }`}
>
  {/* Standardize margin for both sections */}
  <div className="space-y-8">
    {/* Location Section */}
    <CategoryLocation />

    {/* Car Cards Section */}
    <CategoryCards />
  </div>
  
  {/* Centering the button */}
  <div className="flex justify-center items-center mt-8 text-white m-10">
    <Button className="bg-primary-500 " >Show more car</Button>
  </div>
</main>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPage;
