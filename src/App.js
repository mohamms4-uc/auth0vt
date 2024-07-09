import React from 'react';
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import './index.css';
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className='center' >
        <Routes>
        <Route path='/' element={<LoginButton />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
