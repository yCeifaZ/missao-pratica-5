import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'

const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        <Link legacyBehavior href="/">
          <a className="nav-link">Index</a>
        </Link>
        <Link legacyBehavior href="/LivroLista">
          <a className="nav-link">LivroLista</a>
        </Link>
        <Link legacyBehavior href="/LivroDados">
          <a className="nav-link">LivroDados</a>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;