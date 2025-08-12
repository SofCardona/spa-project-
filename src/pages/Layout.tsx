import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <h1>Kodigo Music</h1>
        <nav>
          <Link to="/">Inicio</Link> |{' '}
          <Link to="/about">Sobre</Link> |{' '}
          <Link to="/contact">Contacto</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
