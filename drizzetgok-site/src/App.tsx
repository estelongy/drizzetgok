import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Bio from './pages/Bio';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ana sayfa linki hem boş hem de #anasayfa için çalışsın */}
        <Route path="/" element={<Home />} />
        <Route path="/anasayfa" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        {/* Eğer başka özel sayfaların varsa buraya ekleyeceğiz */}
      </Routes>
    </Router>
  );
}

export default App;
