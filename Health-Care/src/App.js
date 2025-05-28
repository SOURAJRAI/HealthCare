import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './components/Dashboard';
import CalendarPanel from './components/calendarpanel';



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
