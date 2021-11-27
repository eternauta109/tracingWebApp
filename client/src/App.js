import React from 'react';
import './style.css';
import Login from './component/login';
import Tracing from './component/tracing';
import Navbar from './component/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <div className="container-fluid">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="tracing" element={<Tracing />} />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
