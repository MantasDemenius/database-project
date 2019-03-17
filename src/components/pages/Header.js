import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
    return (
      <header>
        <h1>
          <Link to="/">Duomenų bazių antrasis laboratorinis darbas</Link>
        </h1>
        <nav>
          <div className="navigation-container">
            <li><Link to="/imones">Imonės</Link></li>
            <li><Link to="/restoranai">Restoranai</Link></li>
            <li><Link to="/darbuotojai">Darbuotojai</Link></li>
            <li><Link to="/tiekejai">Tiekėjai</Link></li>
            <li><Link to="/atsiliepimai">Atsiliepimai</Link></li>
            <li><Link to="/klientai">Klientai</Link></li>
            <li><Link to="/uzsakymai">Užsakymai</Link></li>
          </div>
        </nav>
      </header>
    );
}

export default Header;
