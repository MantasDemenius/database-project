import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'


function Header() {
    return (
      <header>
        <Segment attached='top'>
          <h1><Link to="/">Duomenų bazių antrasis laboratorinis darbas</Link></h1>
        </Segment>
        <Menu>
          <Menu.Item><Link to="/imones">Imonės</Link></Menu.Item>
          <Menu.Item><Link to="/restoranai">Restoranai</Link></Menu.Item>
          <Menu.Item><Link to="/darbuotojai">Darbuotojai</Link></Menu.Item>
          <Menu.Item><Link to="/tiekejai">Tiekėjai</Link></Menu.Item>
          <Menu.Item><Link to="/atsiliepimai">Atsiliepimai</Link></Menu.Item>
          <Menu.Item><Link to="/klientai">Klientai</Link></Menu.Item>
          <Menu.Item><Link to="/uzsakymai">Užsakymai</Link></Menu.Item>
        </Menu>
      </header>
    );
}

export default Header;
