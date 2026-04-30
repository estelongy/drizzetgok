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
        <Route path="/anasayfa" element={<Home />} />
        <Route path="/pages/bio" element={<Bio />} />
        <Route path="/hizmetlerimiz/:slug" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
