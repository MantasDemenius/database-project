import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'


function Header() {
    return (
      <header>
        <Segment textAlign='center' attached='top'>
          <h1><Link to="/">Duomenų bazių antrasis laboratorinis darbas</Link></h1>
        </Segment>
          <Menu fluid widths={7}>
            <Menu.Item><Link to="/imone">Imonės</Link></Menu.Item>
            <Menu.Item><Link to="/restoranas">Restoranai</Link></Menu.Item>
            <Menu.Item><Link to="/darbuotojas">Darbuotojai</Link></Menu.Item>
            <Menu.Item><Link to="/tiekejas">Tiekėjai</Link></Menu.Item>
            <Menu.Item><Link to="/atsiliepimas">Atsiliepimai</Link></Menu.Item>
            <Menu.Item><Link to="/klientas">Klientai</Link></Menu.Item>
            <Menu.Item><Link to="/uzsakymas">Užsakymai</Link></Menu.Item>
          </Menu>
      </header>
    );
}

export default Header;
