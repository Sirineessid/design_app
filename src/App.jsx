import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";
import MeetingDashboard from "./MeetingDashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <MeetingDashboard />
    </div>
  );
}

export default App;