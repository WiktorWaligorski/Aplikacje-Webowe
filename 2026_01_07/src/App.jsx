import './App.scss'
import Index from './components/index/index.jsx'
import Navbar from "./components/navbar/navbar.jsx";
import Entry from './components/entry/entry.jsx'
import Categories from './components/categories/categories.jsx'
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nwpis" element={<Entry />} />
          <Route path="/kat" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
