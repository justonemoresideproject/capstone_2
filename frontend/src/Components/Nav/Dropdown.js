import '../ComponentCss/Navbar2.css'

import { NavLink } from 'react-router-dom';

function Dropdown({submenu, dropDown}) {
    console.log(`Dropdown: ${dropDown}`)
    console.log(`Submenu: ${submenu}`)
    return (
        <ul 
            className={`dropDown${dropDown ? "-show" : ""}`}>
            {submenu.map((item, index) => {
                console.log(item)
                return (
                <li className="navItem" key={index}>
                    <NavLink 
                        to={item.location}>
                        {item.title}
                    </NavLink>
                </li>
                )
            })}
        </ul>
    )
}

export default Dropdown