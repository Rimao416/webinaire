import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
    const navBar=[{
        href:"/",
        text:"Accueil"
      },{
        href:"/blog",
        text:"Blog"
      }
      ,{
        href:"/contact",
        text:"Contact"
      }
    
    ]
  return (
    <nav className="navbar">
    <div className="navbar-brand">
      <Link to={"/"} className="navbar-logo">
        Mon Blog
      </Link>
    </div>
    <ul className="navbar-links">
      {navBar.map((link) => (
        <li key={link.href}>
          <Link to={link.href} className="navbar-link">
            {link.text}
          </Link>
        </li>
      ))}
      
    </ul>
  </nav>
  )
}

export default Navbar
