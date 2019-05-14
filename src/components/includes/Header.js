import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'


function Header() {
    return (
      <header>
        <Segment textAlign='center' attached='top'>
          <h1><Link to="/database-project/">Duomenų bazių antrasis laboratorinis darbas</Link></h1>
        </Segment>
          <Menu fluid widths={5}>
            <Menu.Item><Link to="/database-project/Companies" >Companies</Link></Menu.Item>
            <Menu.Item><Link to="/database-project/Restaurants"  >Restaurants</Link></Menu.Item>
            {/*<Menu.Item><Link to="/Employees">Employees</Link></Menu.Item>*/}
            <Menu.Item><Link to="/database-project/Suppliers">Suppliers</Link></Menu.Item>
            <Menu.Item><Link to="/database-project/Comments">Comments</Link></Menu.Item>
            <Menu.Item><Link to="/database-project/Clients">Clients</Link></Menu.Item>
            {/*<Menu.Item><Link to="/Orders">Orders</Link></Menu.Item>*/}
          </Menu>
      </header>
    );
}

export default Header;
