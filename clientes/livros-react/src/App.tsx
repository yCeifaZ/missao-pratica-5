import './App.css';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


function App() {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Catálogo</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/livro-dados" className="nav-link">Novo</NavLink>
        </li>
      </ul>
    </nav>
    <body style={{ width: '80%', margin: '0 auto', textAlign: 'left' }}>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/livro-dados" element={<LivroDados />} />
      </Routes>
    </body>
    </Router>
  );
}

export default App;
