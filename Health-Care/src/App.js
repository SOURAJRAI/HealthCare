import React from 'react';
import './App.css';
import Sidebar from './component/sidebar/sidebar';
import Dashboard from './component/Dashboard';
import CalendarPanel from './component/calenderpanel';



function App() {
  return (
    <div className="app">
     <Sidebar />
    <Dashboard />
    <CalendarPanel />
    </div>
  );
}

export default App;
