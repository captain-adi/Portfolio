import React from "react";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />

      <div className="flex-1  lg:ml-[15rem] transition-all duration-300">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
