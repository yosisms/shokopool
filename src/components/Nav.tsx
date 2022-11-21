import React from 'react';
import {Navbar, NavbarBrand} from "reactstrap";

export interface INavBarProps {
}

const Nav: React.FC<INavBarProps> = () => {
    return (
        <Navbar
            color={'dark'}
            dark
        >
            <NavbarBrand href="/">ShokoPool</NavbarBrand>
        </Navbar>
    )
};

export default Nav;