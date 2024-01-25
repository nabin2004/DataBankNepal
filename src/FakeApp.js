import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from './pages/home';
import APIs from './pages/api';
import Download from './pages/download';
import Insights from './pages/insights';
import About from './pages/about';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/api">APIs</Link>
            </li>
            <li>
              <Link to="/download">Download</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<APIs />} />
          <Route path="/download" element={<Download />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Insights />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);
