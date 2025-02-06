import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Prices from './Pages/Prices';
import Whysite from './Pages/Whysite';
import NotFound from './Pages/NotFound';
import ScrollToTop from './Components/ScrollToTop';
import WhatsAppButton from './Components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Landing />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/whysite" element={<Whysite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;
