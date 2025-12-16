import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router";
import Home from "./pages/home/Home.jsx";
import Page1 from "./pages/page1/Page1.jsx";
import Page2 from "./pages/page2/Page2.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <BrowserRouter>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/path1">Page1</Link>
                      </li>
                      <li>
                          <Link to="/path2">Page2</Link>
                      </li>
                  </ul>
              </nav>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/path1" element={<Page1 />} />
                  <Route path="/path2" element={<Page2 />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
