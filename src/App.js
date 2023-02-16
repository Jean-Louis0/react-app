import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Galerie from './pages/Galerie';
import portfolio from './pages/portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Erreur from './pages/Erreur';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Accueil/>} />
          <Route path='/galerie' element={<Galerie/>} />
          <Route path='/portfolio' element={<portfolio/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='*' element={<Erreur/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
