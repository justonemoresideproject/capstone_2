import '../ComponentCss/Navbar2.css'

import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';

import { NavItems } from './NavItems'
import NavItem from './NavItem'

function NavigationBar() {
    const store = useSelector(store => store)
    // if(Object.keys(store.CartItems).length > 0) {

    // }
    
    return (
        <nav>
            <ul className="navMenu">
                {NavItems.map((item, index) => {
                    return (
                        <NavItem item={item} key={index} />
                    )
                })}
                {/* {
                    Object.keys(store.CartItems).length > 0 ? <NavLink className="navLink" to="checkout">Checkout</NavLink> : <NavLink className="navLink" to="products">Products</NavLink>
                } */}
                
            </ul>
        </nav>
    )
}

export default NavigationBar