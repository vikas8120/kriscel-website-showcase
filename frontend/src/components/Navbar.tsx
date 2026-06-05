import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <Link className="brand" to="/">
        <img className="brand-logo brand-logo--kriscel" src="/kriscel-logo.png" alt="Kriscel Tech" />
      </Link>
      <nav className="nav-links">
        <NavLink to="/" end>
          About
        </NavLink>
        <NavLink to="/projects" className="nav-link--with-caret">
          Solutions
          <span aria-hidden="true">⌄</span>
        </NavLink>
        <NavLink to="/projects">Blogs</NavLink>
        <NavLink to="/projects">Careers</NavLink>
      </nav>
      <Link className="cta cta--nav cta--talk" to="/projects">
        Let's Talk
      </Link>
    </header>
  )
}

export default Navbar
