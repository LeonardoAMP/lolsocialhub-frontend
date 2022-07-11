import './sbAdmin.css';
import Header from './components/Header';
import Home from './pages/Home'
import NewSummoner from './pages/NewSummoner'
import Nosotros from './pages/Nosotros'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container-fluid" >
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="Unirme" element={<NewSummoner />} />
          <Route path="Nosotros" element={<Nosotros />} />
          
      </Routes>
      </main>
    </div>
  );
}

export default App;
