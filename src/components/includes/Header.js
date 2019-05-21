import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Dropdown } from 'semantic-ui-react'

// <Link to="/Comments">Comments</Link> <Link to="/Clients">Clients</Link>



function Header() {
    return (
      <header>
        <Segment textAlign='center' attached='top'>
          <h1><Link to="/">Duomenų bazių antrasis laboratorinis darbas</Link></h1>
        </Segment>
          <Menu fluid widths={6}>
            <Menu.Item name="Companies" as={Link} to="/Companies"></Menu.Item>
            <Menu.Item  name="Restaurants" as={Link} to="/Restaurants"></Menu.Item>
            {/*<Menu.Item><Link to="/Employees">Employees</Link></Menu.Item>*/}
          <Menu.Item name="Suppliers" as={Link} to="/Suppliers"></Menu.Item>
            <Menu.Item name="Comments" as={Link} to="/Comments"></Menu.Item>
            <Menu.Item name="Clients" as={Link} to="/Clients"></Menu.Item>
              <Dropdown item text='Reports'>
                <Dropdown.Menu>
                  <Dropdown.Item style={dropdownItem} as={Link} to="/Report/Order">Order</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            {/*<Menu.Item><Link to="/Orders">Orders</Link></Menu.Item>*/}
          </Menu>
      </header>
    );
}

const dropdownItem = {
  textAlign:'center'
}

export default Header;
