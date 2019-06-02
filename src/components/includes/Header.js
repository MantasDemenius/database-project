import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Dropdown } from 'semantic-ui-react'


function Header() {
    return (
      <header>
        <Segment textAlign='center' attached='top'>
          <h1><Link to="/database-project/">Database project for displaying and modifying it's information</Link></h1>
        </Segment>
          <Menu fluid widths={6}>
            <Menu.Item name="Companies" as={Link} to="/database-project/List/Companies"></Menu.Item>
            <Menu.Item  name="Restaurants" as={Link} to="/database-project/List/Restaurants"></Menu.Item>
            {/*<Menu.Item><Link to="/Employees">Employees</Link></Menu.Item>*/}
          <Menu.Item name="Suppliers" as={Link} to="/database-project/List/Suppliers"></Menu.Item>
            <Menu.Item name="Comments" as={Link} to="/database-project/List/Comments"></Menu.Item>
            <Menu.Item name="Clients" as={Link} to="/database-project/List/Clients"></Menu.Item>
              <Dropdown item text='Reports'>
                <Dropdown.Menu>
                  <Dropdown.Item style={dropdownItem} as={Link} to="/database-project/Report/Order">Order</Dropdown.Item>
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
