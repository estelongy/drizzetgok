import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Service from './pages/Service';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anasayfa" element={<Home section="anasayfa" />} />
        <Route path="/hakkimda" element={<Home section="hakkimda" />} />
        <Route path="/hizmetler" element={<Home section="hizmetler" />} />
        <Route path="/sss" element={<Home section="sss" />} />
        <Route path="/iletisim" element={<Home section="iletisim" />} />
        <Route path="/pages/bio" element={<Bio />} />
        <Route path="/hizmetlerimiz/:slug" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
