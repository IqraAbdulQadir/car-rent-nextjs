import React from "react";

interface SidebarProps {
  isOpen: boolean; // Whether the sidebar is open or closed
  onClose: () => void; // Function to close the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* Sidebar Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-light text-gray-600">Filter Options</h2>
            <button
              onClick={onClose} // Close the sidebar
              className="text-gray-500 hover:text-black"
              aria-label="Close sidebar"
            >
              ✖
            </button>
          </div>

          {/* Filter Sections */}
          <div className="space-y-6">
            {/* Type Filter */}
            <div>
              <h3 className="text-xs font-medium text-gray-500 mb-2">Type</h3>
              <ul className="space-y-2">
                {[
                  { label: "Sport (10)", value: "sport" },
                  { label: "SUV (12)", value: "suv" },
                  { label: "MPV (16)", value: "mpv" },
                  { label: "Sedan (20)", value: "sedan" },
                  { label: "Coupe (14)", value: "coupe" },
                  { label: "Hatchback (14)", value: "hatchback" },
                ].map((item) => (
                    <li key={item.value} className="flex justify-start items-center">
                    <input
                      type="checkbox"
                      className="accent-blue-600"
                      aria-label={item.label}
                    />
                    <span className="text-xs">{item.label}</span>
                  </li>
                  
                ))}
              </ul>
            </div>

            {/* Capacity Filter */}
            <div>
              <h3 className="text-xs font-medium text-gray-500 mb-2">Capacity</h3>
              <ul className="space-y-2">
                {[
                  { label: "2 Person", value: "2" },
                  { label: "4 Person", value: "4" },
                  { label: "6 Person", value: "6" },
                  { label: "8 or More", value: "8+" },
                ].map((item) => (
                  <li key={item.value} className="flex items-center">
                    <input
                      type="checkbox"
                      className="accent-blue-600"
                      aria-label={item.label}
                    />
                    <span className="text-xs ">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Slider */}
            <div>
              <h3 className="text-xs font-medium text-gray-500 mb-2">Price</h3>
              <input
                type="range"
                min="0"
                max="100"
                className="w-full accent-blue-600"
                aria-label="Price slider"
              />
              <p className="text-xs text-gray-600 text-right mt-1">Max. $100.00</p>
            </div>
          </div>
        </div>
      </div>

   

    </>
  );
};

export default Sidebar;
