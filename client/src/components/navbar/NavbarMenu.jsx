import React from 'react'
import { Link } from 'react-router-dom'

function NavbarMenu({setShowMenu}) {
  return (
    <ul>
        <li>
            <Link to="/" onClick={() => setShowMenu(false)}>
                Forside
            </Link>
        </li>
        <li>
            <Link to="/category/1" onClick={() => setShowMenu(false)}>
                Laptops
            </Link>
        </li>
        <li>
            <Link to="/category/2" onClick={() => setShowMenu(false)}>
                Telefoner
            </Link>
        </li>
    </ul>
  )
}

export default NavbarMenu