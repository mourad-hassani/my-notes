import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header() {
    return (
        <Navbar style={{ backgroundColor: "lightcoral" }} light expand="md" className="justify-content-center fixed-top" >
            <NavbarBrand href="#">my-notes</NavbarBrand>
        </Navbar>
    );
}

export default Header;