import { Navigate } from 'react-router-dom'
import { NavLink } from "react-router-dom";

function Navbar() {
    
    return (
        <div className="navbar-container">
            <img className="logo" src="images/logo.svg" alt="logo"/>
            <nav>
                <NavLink to="products">Products</NavLink>
                <NavLink to="orders">Orders</NavLink>
                <NavLink to="customers">Customers</NavLink>
                <NavLink to="addresses">Addresses</NavLink>
                <NavLink to="myOrders">My Orders</NavLink>
                <NavLink to="myAddresses">My Addresses</NavLink>                    
                <NavLink to="myProfile">My Profile</NavLink>
            </nav>
            <NavLink to="checkout">Checkout</NavLink>
            <NavLink to="login">Login</NavLink>
            <NavLink to="register">Register</NavLink>
        </div>
    )
}

export default Navbar